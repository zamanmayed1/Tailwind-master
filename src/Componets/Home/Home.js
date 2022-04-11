import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../Features/Features';
import Work from '../Work/Work';

const Home = () => {
          return (
                   <div>
                              <div className='px-32 flex  w-full bg-blue-50 py-16'> 
                             <div className="text w-2/4 mt-12  items-center">
                             <h2 className='text-2xl lg:text-5xl font-bold font-mono'>Download App , <br />
                                        Start Learning , <br /> Be Tailwind Master</h2><br />
                              <p className='text-xl text-gray-800 font-sans mb-6'>Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.</p>
                              <div className="flex homebtn ">
                              <Link className='downloadbtn' to={'/'}>Download Now</Link>
                              <Link className='downloadbtn bg-green-500' to={'/'}>Read More</Link>
                              </div>
                             </div>

                                        <div className="img flex justify-center w-2/4">
                                                  <img className=' md:w-3/5' src="https://i.ibb.co/F0qyLhk/image.png" alt="" />
                                        </div>
                    </div>
                    <Features/>
                    <Work/>
                   </div>
          );
};

export default Home;