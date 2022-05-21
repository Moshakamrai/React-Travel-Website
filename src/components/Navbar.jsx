
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaPinterest , FaTwitter , FaYoutube} from 'react-icons/fa'
import {React, useState} from 'react'

function Navbar() {
  const [hamButton, triggerhamButton] = useState(false);
  const handleNav = () =>{
    triggerhamButton(!hamButton)
  };
  return (
    <div className='flex justify-between items-center h-20 px-4 '>
      <div >
        <h1>BEACHES</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex'>  
      <BiSearch size= {20}/>
      <BsPerson size= {20}/>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        { hamButton ? <AiOutlineClose className='text-black' size={30}/> : <HiOutlineMenuAlt4 size={30} />}
        
      </div>
       {/*Mobile menu dropdown */}
      <div onClick={handleNav} className={hamButton ? 'absolute top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
      <ul>
        <h1>BEACHES</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destinations</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>View</li>
        <li className='border-b'>Book</li>
        <div className=' flex flex-col my-5 pr-4'>
          <button className='mb-4'>Search</button>
          <button>Account</button>
        </div>
        <div className='flex flex-row justify-between mt-4'>
          <FaFacebook className ='icon'  />
          <FaTwitter  className ='icon' />
          <FaYoutube  className ='icon' />
          <FaPinterest  className ='icon' />
          <FaInstagram className='icon' />
          
        </div>
      </ul>
      </div>
    </div>
  )
}

export default Navbar