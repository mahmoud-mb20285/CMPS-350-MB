// app/cust/error.js

'use client'

import { useEffect } from 'react';

export default function CustomError({ error, reset }) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div style={{ padding: '20px', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
