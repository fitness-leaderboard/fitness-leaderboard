import React, { useEffect } from 'react';

function Home() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return <div>Home</div>;
}

export default Home;
