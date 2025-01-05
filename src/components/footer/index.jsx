import React from 'react'

const Footer = () => {
  return (
    <footer className="app-footer bg-yellow frame-space-before-large frame-space-after-medium">
      <div className='text-center mb-5'>
        <svg fill="none" viewBox="0 0 160 46" width='200' xmlns="http://www.w3.org/2000/svg">
          <rect width="45" height="45" fill="#000" rx="22.5" />
          <path fill="#fff" d="M21.978 10.123c0-.001-.001-.001 0 0L10.675 33.98h4.844l9.147-18.474-2.688-5.383zM27 19.988l-4.665 9.688-.09.18h4.575l1.794 4.127h5.202L27 19.988z" />
          <text x="50" y="35" fill="#000" fontFamily="Dancing Script" fontSize="32" fontWeight="700">
            Adarsh
          </text>
        </svg>
      </div>
      <p className='lead text-center'>Living, learning, & leveling up <br /> one day at a time.</p>
      <p className='text-dark text-center'>Handcrafted by me</p>
    </footer>
  )
}

export default Footer;
