import React from 'react';
import plane from '../public/assets/plane';
import bulb from '../public/assets/bulb.svg'
import human from '../public/assets/human.svg'
import angles from '../public/assets/angles.svg'



const Attend = () => {
  return (
  <>
  <div className='w-c mx-auto justify-around hidden md:flex mt-10'>
    {plane}
  </div>
  <div className='sm:flex mx-auto w-[100%] sm:w-c  justify-between sm:gap-4 '>
    <div className='w-c mx-auto p-4  sm:pb-24 sm:pt-11 justify-center rounded-md bg-white mt-5'>
      <div className='w-c mx-auto flex sm:block'>
        <div className='pb-3 order-2 ml-auto'>
          <img src={bulb.src}/>
        </div>
      <div className='text-design pb-4'>design & build<br>
      </br> something cool</div>
      </div>
      <p className='p-design mx-2 text-[#406932]'>
      create a unique project with other high school students in 48 hours, by the end of the weekend!
      </p>
    </div>
    <div className='w-c mx-auto p-4 justify-center   sm:pb-24 sm:pt-11 rounded-md bg-white mt-5'>
      <div className='w-c mx-auto flex sm:block'>
      <div className='pb-3 order-2 ml-auto'>
      <img src={human.src}/>
        </div>
      <div className='text-design pb-4'>meet people &<br></br>
    make connections</div>
      </div>
      <p className='p-design mx-2 text-[#406932]'>
      meet new people from all over the Bay Area, find shared interests, and make connections!
      </p>
    </div>
    <div className='w-c mx-auto p-4 justify-center  sm:pb-24  sm:pt-11 rounded-md bg-white mt-5'>
      <div className='w-c mx-auto flex sm:block'>
      <div className='pb-3 order-2 ml-auto'>
      <img src={angles.src}/>
        </div>
      <div className='text-design pb-4'>learn new skills</div>
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