import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Post } from './components/Navbar/content-reel/post/posts';

const app = () => {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(()=> {
    fetch("https://www.reddit.com/r/baseball.json").then(response => {
      if (response.status != 200) {
        console.log("Error response from server unsuccessful");
        return;
      }

      response.json().then(data => {
        if (data != null) {
          setPosts(data.data.children);
        }
      });
    })
  }, [subreddit]);

  return (
    <Container>
      <div className='navbar'>
          <a className='navbar-brand' href={''}>
            <img src='https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png' width="32px" style={({marginRight: 8})} alt='logo' />
            Reddit Minimal
          </a> 
      </div>
      <div className='card'>
         {
          (posts != null) ? posts.map((post, index) => <Post key={index} posts={post.data} />) : ''
         }
      </div>
    </Container>
  )
}

export default app;
