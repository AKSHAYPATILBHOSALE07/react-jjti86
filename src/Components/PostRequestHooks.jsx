import React, { useState, useEffect } from 'react';

export default function PostRequestHooks() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: 'kiran', password: '123' }),
    };
    fetch('http://localhost:8080/api/users/signup', requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <>
    <div className="card text-center m-3">
      <h5 className="card-header">POST Request with React Hooks</h5>
      <div className="card-body">Returned Id: {postId}</div>
    </div>

    </>
  );
}

