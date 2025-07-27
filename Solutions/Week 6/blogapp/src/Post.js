import React from 'react';

const Post = ({ title, body }) => (
  <div style={{ border: '1px solid black', marginBottom: '15px', padding: '10px' }}>
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);

export default Post;
