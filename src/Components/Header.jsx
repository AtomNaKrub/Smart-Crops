import { NavLink } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";

import './Header.css'

export default function Header() {
  return (
    <div className="header-navbar">
        <div className='header-navbar-logo'>
            Smart-Crops
          </div>
          <div className='header-navbar-content'>
            <ul>
            <li><NavLink style={{textDecoration: 'none', color:'white'}} to='/'>Dashboard</NavLink></li>
            <li><NavLink style={{textDecoration: 'none', color:'white'}} to='/manage/'>Manage</NavLink></li>
            <li><NavLink style={{textDecoration: 'none', color:'white'}} to='/select'>Add Plot</NavLink></li>
            </ul>
          </div>
          <div  className='header-navbar-account'>
            <MdAccountCircle size='3em' color='white' />
          </div>
    </div>
  )
}