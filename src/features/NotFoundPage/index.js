
import React from 'react';
import './style.scss';
function NotFoundPage() {
  return (
    <div className='nfcontent'>
        <h1>404</h1>
        <p>Oops! Something is wrong.</p>
        <a class="button" href="#"><i class="icon-home"></i> Go back in initial page, is better.</a>
    </div>
  );
}

export default NotFoundPage;