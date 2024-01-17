import React, { useState, useEffect } from 'react';

// Select the submit button element
var submitButton = document.getElementById("submitButton");

// Add a mouseover event listener to change the color on hover
submitButton.addEventListener("mouseover", function() {
    // Change the background color when the mouse hovers over the button
    submitButton.style.backgroundColor = "#e74c3c"; // You can set any color code here
});

// Add a mouseout event listener to revert the color when the mouse leaves the button
submitButton.addEventListener("mouseout", function() {
    // Revert to the original background color when the mouse leaves the button
    submitButton.style.backgroundColor = "#3498db"; // Original color code
});

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
        <button id="submitButton" type="submit">Add</button>
      </form>
    </div>
  );
};

export default PostForm;