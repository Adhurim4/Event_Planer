import React, { useState } from 'react'
import  reactLogo from '../assets/react.svg'
import  menu from '../assets/menu.svg'
import  close from '../assets/close.svg'
import styles from '../styles'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full  flex py-6 justify-between items-center navbar'>
      <img src={reactLogo} alt="EventPlanner" className="w-[124px] h-[40px]" />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li className={`${styles.liNav} text-xl mr-10 cursor-pointer hover:text-gray-700`}>
        <Link to="./">Home</Link>
        </li>
        <li className={`${styles.liNav} text-xl hover:text-gray-700 `}>
        <Link to="/about">About</Link>
        </li>
        <li className={`${styles.liNav} text-xl hover:text-gray-700`}>
        <Link to="/more">More</Link>
        </li>
        <li className={`${styles.liNav} text-xl hover:text-gray-700`}>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1  justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className="w-[30px] h-[30px] object-contain mr-4 " onClick={()=>setToggle((prev)=>(!prev))} />

            <div className={`${toggle ? 'flex' : 'hidden' }` }>
               <ul className='list-none flex flex-col justify-start items-center flex-1 bg-slate-500  absolute top-20 right-0 my-[9px] min-w-[40%] rounded-xl sidebar '>
                    <li className={`${styles.liNavMob} py-2 text-[20px]`} onClick={()=>setToggle((prev)=>(!prev))}>
                      Home
                    </li>
                    <li className={`${styles.liNavMob} py-2  text-[20px]`} onClick={()=>setToggle((prev)=>(!prev))} >
                        About
                    </li>
                    <li className={`${styles.liNavMob} py-2  text-[20px]`} onClick={()=>setToggle((prev)=>(!prev))} >
                        More
                    </li>
                    <li className={`${styles.liNavMob} py-2 mb-2 text-[20px]`} onClick={()=>setToggle((prev)=>(!prev))} >
                        Contact
                    </li>
              </ul>
            </div>
      </div>
    </nav>
  )
}

export default Navbar
