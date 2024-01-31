import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    posts: [],
    state: 'idle', // 'loading', 'succeded', 'failed'
    author: -1
};

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const reactions = {
    thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    };

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addpost: {
      reducer(state, action) {
        state.posts.unshift(action.payload);
      },
      prepare(title, body) {
        return{
          payload: {
            id: nanoid(),
            title,
            body,
            reactions
          }
        }
      }
    },
    addreaction: (state, action) => {
        const { id, name } = action.payload;
        const post = state.posts.find(post => post.id === id);
        if (post) {
            post.reactions[name] ++;
        }
    },
    filterAuthor: (state, action) => {
      state.author = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeded';
        const loadedPosts = action.payload.map(post => {
            post.reactions = reactions;
            return post;
        })
        state.posts = loadedPosts;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
    });
  },
});

export const { addpost, addreaction, filterAuthor } = postsSlice.actions;
export default postsSlice.reducer;
