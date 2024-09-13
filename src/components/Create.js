import React, { useState } from 'react';
import './Create.css';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the blog data to the backend.
    console.log({ title, description });
  };

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default Create;