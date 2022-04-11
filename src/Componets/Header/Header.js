import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
          return (
                    <header className='md:flex p-2 md:px-36  bg-white header justify-between sticky top-0'>
                              <div  className='flex items-center'>
                                        <img className='w-16' src='https://i.ibb.co/VjRbbqj/logo.png' alt="" />
                                        <h2 className='text-3xl ml-3 font-bold text-blue-800'>Tailwind Master</h2>
                                        
                              </div>
                              <nav className='flex items-center'>
                                        <Link to={'/'}>Home</Link>
                                        <Link to={'#features'}>Features</Link>
                                        <Link to={'#work'}>How App Works</Link>
                                        <Link to={'#'}>Review</Link>
                                        <Link className='download ' to={'/'}>Download</Link>
                              </nav>
                    </header>
          );
};

export default Header;