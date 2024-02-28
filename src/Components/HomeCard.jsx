import { FaLongArrowAltRight } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { CiTempHigh } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { onSnapshot, doc, deleteDoc, collection, query, where } from 'firebase/firestore'
import { db } from "../data/Firebase/firebase";

import './HomeCard.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomeCard({ id }) {
  const [plant, setPlant] = useState({})

  useEffect(() => {
    const unsubcribe = onSnapshot(doc(db, 'Crops-Management', id), {
      next: doc => {
        try {
          setPlant(doc.data())
        } catch {
          async () => {
            await deleteDoc(query(collection(db, "Crops-Code")), where("id","===",id));
          }
        }
      },
      error: err => {
        console.log(err)
      }
    })
    return () => unsubcribe()
  }, [])

  return (
    <div>
      {plant ?
        (<div className="HomeCard">
        <div className="upper-homecard">
          <div className="upper-homecard-text">Plot {plant.id} ({plant.title})</div>
          <Link to={`/manage/${plant.id}`}><div className="upper-homecard-arrow"><div><FaLongArrowAltRight size='2em'/></div></div></Link>
        </div>
        <div className="lower-homecard">
          <div>
            <div id="Plant-Icon"><PiPottedPlantFill size='5em' color={plant.summary == 'good' ? "#A4D8AD" : "#FAA0A0"}  /></div>
            <div className="lower-homecard-text">{plant.summary}</div>
          </div>
          <div>
            <CiTempHigh size='5em' />
            <div className="lower-homecard-text">{plant.summaryTemp}</div>
          </div>
          <div>
            <CiSun size='5em' />
            <div className="lower-homecard-text">{plant.summaryLight}</div>
          </div>
        </div>
      </div>) : <></>}
    </div>
  )
}