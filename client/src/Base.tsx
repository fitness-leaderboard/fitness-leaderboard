import React from 'react';

function Base() {
  const handleLogin = async () => {
    window.location.href = 'http://localhost:8080/initiateOAuth';
  };
  return <button onClick={handleLogin}>Connect to Strava</button>;
}

export default Base;
