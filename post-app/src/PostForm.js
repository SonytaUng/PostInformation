import React, { useState, useEffect } from 'react';

const PostForm = ({ addEntry }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
 
  useEffect(() => {
      setTitle(addEntry.title);
      setBody(addEntry.body);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert('Please enter all post inforamtion!');
      return;
    }

    const entry = {
      title,
      body,
    };

    
    // add a new entry
    addEntry(entry);


    // clear the form
    addEntry(entry);
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2 class="add-post">Add Post Information:</h2>
      <form onSubmit={handleSubmit}>
        <label class="title"> Title: </label>
        <input type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
        
        <label class= "description"> Description: </label>
        <input type="text" 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          required 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PostForm;