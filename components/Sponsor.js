import React,{useState, useRef, useEffect} from 'react';
import Wolfram from "../public/assets/wolfram.svg"
import Xyz from "../public/assets/xyz.svg"
import Vercel from "../public/assets/verel.svg"
import Sticker from "../public/assets/stickergiant.svg"
import Digital from "../public/assets/digital.svg"
import Beezwax from "../public/assets/beezwax.svg"
import TechLim from "../public/assets/techlim.svg"

const Sponsor = () => {

  const [isActive, setIsActive] = useState(false);
  const donateRef = useRef();


  useEffect(() => {
    let handler = (event) => {
      if (!donateRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handler )

    return () => document.removeEventListener('mousedown', handler);
  })


  return (
   <>
   <div className="flex flex-col md:flex-row w-c mx-auto items-center justify-center" id='sponsors'>
     <div className='w-[100%] md:w-[50%] align-middle mx-auto md:mx-0'>
       <div className='mt-10 '>
        <div className=''>
          <div className='thank font-extrabold  text-white'>THANK YOU TO OUR</div>
          <div className='spon text-outline font-extrabold text-transparent'>SPONSORS</div>
        </div>
       </div>
       <div>
        <div className='w-c mx-auto flex gap-10'>
          <div>
          <a rel="noreferrer" href="https://www.wolframalpha.com/" target="_blank">
            <img src={Wolfram.src} />
            </a>
            </div>
          <div>
          <a rel="noreferrer" href="https://gen.xyz/" target="_blank">
            <img src={Xyz.src} />
            </a>
            </div>
        </div>
        <div className='w-c mx-auto flex gap-10 items-center'>
        <div>
        <a rel="noreferrer" href="https://vercel.com/" target="_blank">
          <img src={Vercel.src} />
          </a>
          </div>
          <div>
        <a rel="noreferrer" href="https://www.stickergiant.com/event-coupons?utm_source=website&utm_medium=event" target="_blank">
          <img src={Sticker.src} />
          </a>
          </div>
        </div>
        <div className='w-c mx-auto flex gap-10 items-center'>
          <div>
            <a rel="noreferrer" href="https://try.digitalocean.com/developer-cloud" target="_blank">
              <img src={Digital.src} />
            </a>
          </div>
          <div>
          <a rel="noreferrer" href="https://www.beezwax.net/" target="_blank">
              <img src={Beezwax.src} />
            </a>
          </div>
        </div>
        <div className='w-c mx-auto flex gap-10 items-center'>
        <div>
          <a href='https://techliminal.com/'>
          <img src={TechLim.src} />
          </a>
        </div>
        </div>
       </div>
     </div>
     <div className='w-[100%] md:w-[50%]'>
       <div className="w-c mx-auto flex justify-center rounded-md border-[5px] border-white mt-5">
            <div className="w-c text-center">
              <h2 className="text-sh-xl font-extrabold italic text-white">
              interested in<br></br> sponsoring or <br>
              </br>supporting?
              </h2>
              <div className='mt-5'>
              <a href='/unitehacks.pdf'
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer">
              <div className='button text-center bg-white text-[#72BA58F7] rounded-md p-1 py-1'>
              
              <button>Sponsor Prospectus</button>
           
              </div>
              </a>
              <div className='button text-center mt-5 bg-white text-[#72BA58F7] rounded-md p-1 py-1 mb-5 cursor-pointer' onClick={() => setIsActive(!isActive)}>
              <button >Make A Donation</button>
              <iframe ref={donateRef} className='donation' src='https://bank.hackclub.com/donations/start/unite-hacks' style={{ display: isActive ? 'block' : 'none'}}></iframe>
              </div>
              </div>
            </div>
          </div>
       
     </div>
   </div>
   </>
  );
}

export default Sponsor;