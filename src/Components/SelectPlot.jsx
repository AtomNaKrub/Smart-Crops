import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

import './SelectPlot.css'

export default function SelectPlot({ plant }) {
  return (
    <div className="SelectCard">
      <div className="upper-selectcard">
        <div className="upper-selectcard-text">{plant.title}</div>
        <Link to={`/detailedSelect/${plant.id}`}><div className="upper-selectcard-arrow"><div><FaLongArrowAltRight size='2em' /></div></div></Link>
      </div>
      <div className="lower-selectcard">
        <div className='lower-selectcard-img'>
            <div><img src={`./Veg-Images/${plant.images}1.png`} /></div>
        </div>
        <div className='lower-selectcard-img'>
            <div><img src={`./Veg-Images/${plant.images}2.png`} /></div>
        </div>
        <div className='lower-selectcard-img'>
            <div><img src={`./Veg-Images/${plant.images}3.png`} /></div>
        </div>
      </div>
    </div>
  )
}