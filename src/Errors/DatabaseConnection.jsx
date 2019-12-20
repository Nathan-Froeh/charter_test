import React from 'react';
import { Link } from "react-router-dom";

export default function DatabaseConnection() {
  return (
    <div className='database-connection'>
      <pre>Error: Database Connectivity Failure</pre>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}
