import React from 'react';
import { Link } from "react-router-dom";

export default function BadFetchRequest() {
  return (
    <div className='bad-fetch-request'>
      <pre>Error: RestAPI call made and couldn't fetch any data</pre>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}
