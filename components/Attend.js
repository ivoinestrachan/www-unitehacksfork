import React from 'react';
const Attend = () => {
  return (
    <>
      <div className='w-c mx-auto mt-10'>
        <div className=''>
        <p className='text-why font-extrabold  text-white'>WHY ATTEND<br/><span className='text-bold-why top-3 font-extrabold text-outline-bold text-transparent'>UNITE?</span></p>
      </div>
      </div>
      <div className='flex gap-2 justify-between w-c mx-auto'> 
        <div className='w-c  mx-auto justify-center rounded-md bg-white mt-5'>
          <div className='w-c mx-auto'>
            <div className='text-design'>design & build<br>
            </br> something cool</div>
          </div>
          <p className='p-design mx-2 text-[#406932]'>
            create a unique project with other high school students in 48 hours, by the end of the weekend!
          </p>
        </div>
        <div className='w-c mx-auto justify-center rounded-md bg-white mt-5'>
          <div className='w-c mx-auto'>
            <div className='text-design'>meet people &<br></br>
              make connections</div>
          </div>
          <p className='p-design mx-2 text-[#406932]'>
            meet new people from all over the Bay Area, find shared interests, and make connections!
          </p>
        </div>
        <div className='w-c mx-auto justify-center rounded-md bg-white mt-5'>
          <div className='w-c mx-auto'>
            <div className='text-design'>learn new skills</div>
          </div>
          <p className='p-design mx-2 text-[#406932]'>
            meet new people from all over the Bay Area, find shared interests, and make connections!
          </p>
        </div>
      </div>
    </>
  );
}

export default Attend;
