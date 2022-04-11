import React from 'react';

const Features = () => {
          return (
                    <div id='features' className='px-36 bg-[#F4FEFF] ' >
                           <h3 className=' text-center text-5xl font-bold text-orange-500 font-mono my-4'>Features</h3>   
                         <div className='py-10 flex '>
                         <div className="img w-2/4">
                                     <img className='w-3/5' src="https://i.ibb.co/tmgdVfz/imng.png" alt="" />
                           </div>
                           <div className="text w-2/4">
                                     <h2 className='text-3xl font-bold text-blue-800'>Some of the best features Of Our App!</h2>
                                     <div className="features grid grid-cols-2 pt-5 gap-8">
                                               <div className="1 py-6 border rounded-lg text-center">
                                                         <img className='mx-auto' src="https://i.ibb.co/P6VP8wv/15702320051586787808-64.png" alt="" />
                                                         <h4 className='text-xl font-bold py-2 text-gray-700'>10+ Lessons</h4>
                                               </div>
                                               <div className="2 py-6 border rounded-lg text-center">
                                               <img className='mx-auto' src="https://i.ibb.co/pvxC9cJ/17578817411582823579-64.png" alt="" />
                                                         <h4 className='text-xl font-bold py-2 text-gray-700'>Google Meet Support</h4>
                                               </div>
                                               <div className="3 py-6 border rounded-lg text-center">
                                               <img className='mx-auto' src="https://i.ibb.co/1zKk5qY/13703107221582823582-64.png" alt="" />
                                                         <h4 className='text-xl font-bold py-2 text-gray-700'>24/7 Facebook Group Support</h4>
                                               </div>
                                               <div className="4 py-6 border rounded-lg  text-center">
                                               <img className='mx-auto' src="https://i.ibb.co/K5m4LdS/13706564521557740357-64.png" alt="" />
                                                         <h4 className='text-xl font-bold py-2 text-gray-700'>Weekly Prizes</h4>
                                               </div>
                                     </div>
                           </div>
                         </div>
                    </div>
          );
};

export default Features;