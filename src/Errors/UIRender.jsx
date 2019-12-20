import React from 'react';
import { Link } from "react-router-dom";

export default function UIRender() {
  return (
    <div className='ui-render'>
      <pre>Error: UI rendering error</pre>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}
