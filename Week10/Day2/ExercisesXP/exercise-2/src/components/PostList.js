import {useState, useEffect} from 'react';
import data from '../data.json'

const PostList = (props) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      setPosts(data);
    }, [])
  
    return (
      <>
      <h1>Posts</h1>
      {
        posts.map(element => {
          return (
            <div>
              <h2>{element.title}</h2>
              <p>{element.content}</p>
            </div>
          )
        })
      }
      </>
    )
}

export default PostList;