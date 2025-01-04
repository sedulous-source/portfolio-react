import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <div className="page-not-found">
        <div className='container'>
          <div className="d-flex justify-content-center align-items-center flex-column my-5">
            <h1 className='mt-5 pt-5'>404</h1>
            <h1>Page Not Found</h1>
            <p className='mb-5 pb-5'>The page you are looking for does not exist.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
