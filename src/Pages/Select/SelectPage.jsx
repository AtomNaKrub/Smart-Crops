import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

import './SelectPage.css'
import SelectPlot from "../../Components/SelectPlot";
import { useSelector } from "react-redux";

export default function SelectPage() {
  const plants = useSelector(state => state.FrontEndData.data)

  return (
    <div>
      <div className="select-plot-container">
        <div className="select-plot-upper">
          <Link to='/'>
            <div className="select-plot-upper-container">
              <div className="select-plot-upper-arrow"><MdOutlineKeyboardArrowLeft size='4em' color="black" /></div>
              <div className="select-plot-upper-text">Back</div>
            </div>
          </Link>
        </div>
        <div>
          {plants.map((plant, index) => (
            <SelectPlot plant={plant} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}