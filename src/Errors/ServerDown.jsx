import React from 'react';
import { Link } from "react-router-dom";

export default function ServerDown() {
  return (
    <div className='server-down'>
      <pre>Error: Database servers are down</pre>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}
