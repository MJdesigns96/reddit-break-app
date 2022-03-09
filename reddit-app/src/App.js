import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Container, FormControl, Navbar, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Post } from './components/Navbar/content-reel/post/posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('popular');

  useEffect(()=> {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then(response => {
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
    <Container className="container">
      <Navbar>
        <Navbar.Brand href="#">
          <img src='https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png' width="32px" style={({marginRight: 8})} alt='logo' />
          Reddit Minimal
        </Navbar.Brand>
        <Col></Col>
        <Form className="d-flex">
          <FormControl 
            type="search"
            placeholder='Search Subreddits'
            className='me-2 input'
            aria-label='Search Subreddits'
            value={subreddit}
            onChange={e => setSubreddit(e.target.value)}
          />
        </Form>
      </Navbar>
      <div className='card'>
         {
          (posts != null) ? posts.map((post, index) => <Post key={index} posts={post.data} />) : ''
         }
      </div>
    </Container>
  )
}

export default App;

