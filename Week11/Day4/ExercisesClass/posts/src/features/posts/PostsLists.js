import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postsSlice";
import AddPostForm from "./AddPostForm";
import ReactionButtons from "./ReactionButtons";
import Users from '../users/Users'

const PostsLists = (props) => {
  const posts = useSelector(state => state.posts.posts);
  const postStatus = useSelector(state => state.posts.status);
  const author = useSelector(state => state.posts.author);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if(postStatus === 'loading') return <p>Loading...</p>
  if(postStatus === 'failed') return <p>Oops! Something went wrong</p>

  const filter = posts.filter(post => {
    if (author != -1) {
      return post.userId == author;
    } else {
      return post;
    }
  })

  const renderPosts = filter.map(post => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <ReactionButtons post={post}/>
      </article>
    );
  })

  return (
    <section>
        <AddPostForm />
        <Users />
        <h2>Posts</h2>
        {renderPosts}
    </section>
  );
};

export default PostsLists;