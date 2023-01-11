import React from 'react';

export default function Data() {


  fetch('http://localhost:8080/api/users/recipe')
  .then((response) => response.json())
  .then(
    (data) => console.log(data)
    //setPostId('ID: ' + data.id + ' Username: ' + data.userName)
  );


  return (
    <>
      <h1>This is New Data Page</h1>
    </>
  ); 
}
