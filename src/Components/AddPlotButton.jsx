import { FaPlusCircle } from "react-icons/fa";

import './PlotButton.css'
import { Link } from "react-router-dom";

export default function AddPlotButton() {
  return (
    <Link to='/select'>
        <div className='PlotButton'>
          <div><div><FaPlusCircle size='2em'/></div></div>
        </div>
    </Link>
  )
}