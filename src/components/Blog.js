// src/components/Blog.js
import React, { useState } from 'react';
import '../styles/styles.css'; // Import styles from src/styles/styles.css

const BlogPost = ({ post, index, onRemovePost }) => (
  <div className="blog-post">
    <h2>{post.title}</h2>
    <p>{post.text}</p>
    {post.image && <img src={post.image} alt="Blog" />}
    <button onClick={() => onRemovePost(index)}>Remove Post</button>
  </div>
);

const AddPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      onAddPost({ title, text, image });
      setTitle('');
      setText('');
      setImage('');
    }
  };

  return (
    <form className="add-post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL (optional):</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="container fade-in">
      <h1>Blog</h1>
      <AddPostForm onAddPost={addPost} />
      <div className="blog-posts">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            index={index}
            post={post}
            onRemovePost={removePost}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
