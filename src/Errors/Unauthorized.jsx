import React from 'react';
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className='unauthorized'>
      <pre>Error: External API call authorization failed</pre>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}
