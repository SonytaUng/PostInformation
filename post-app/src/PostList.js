import React from 'react';


const PostList = ({ entries }) => {

  return (
    <div>
      <h2 class= "post-list">Post List:</h2>
      <ul>
        {entries.map((entry) => (
          <li id="li" key={entry.id} >
            <b id="title">Title </b> {entry.title},
            <b id = "description">Description: </b> {entry.body}, 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
