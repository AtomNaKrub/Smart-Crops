import { Link, useNavigate, useParams } from "react-router-dom"
import { IoMdSettings } from "react-icons/io";
import { BiWater } from "react-icons/bi";
import { CiSun } from "react-icons/ci";
import { CiTempHigh } from "react-icons/ci";
import { PiPlantThin } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import './ManagePlot.css'
import { useEffect, useState } from "react";
import { onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from "../data/Firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useSelector } from "react-redux";

export default function ManagePlot() {
    const [plot, setPlot] = useState({})
    const [deletePlot, setDeletePlot] = useState('')
    const [waterState, setWaterState] = useState()
    const [lightState, setLightState] = useState()

    const { id } = useParams()

    const plant = useSelector(state => state.FrontEndData.data.find(e => e.id === id))

    const navigate = useNavigate()

    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'atom123@gmail.com', 'Pattanaleenakul39945!')
    .then((userCredential) => {
        console.log('log in!')
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
    });
    
    useEffect(() => {
        const unsubcribe = onSnapshot(doc(db, 'Crops-Management', id), {
            next: doc => {
                setPlot(doc.data())
                setWaterState(doc.data().relayWater)
                setLightState(doc.data().relayLight)
            },
            error: err => {
              console.log(err)
            }
        })
        const unsub = onSnapshot(doc(db, 'Crops-Code', id), {
            next: doc => {
                setDeletePlot(doc.id)
            },
            error: err => {
              console.log(err)
            }
        })
        return () => {unsubcribe()
                    unsub()}
    }, [])

    const handleDelete = async () => {
        await deleteDoc(doc(db, "Crops-Code", deletePlot));
        navigate('/')
    }

    const handleWater = async () => {
        setWaterState(prevState => !prevState)
        await updateDoc(doc(db, 'Crops-Management',id), {
            relayWater: waterState
          });
    }

    const handleLight = async () => {
        setLightState(prevState => !prevState)
        await updateDoc(doc(db, 'Crops-Management',id), {
            relayLight: lightState
          });
        navigate(`/manage/${id}`)
    }

  return (
    <div>
        <div className="ManageCard">
            <div className="upper-managecard">
                <div className="upper-managecard-text">Plot {plot.id} ({plot.title})</div>
                <div>
                    <Link to={``}><div className="upper-managecard-arrow"><div><IoMdSettings size='2em' /></div></div></Link>
                    <Link to={``}><div className="upper-managecard-arrow"><div onClick={handleDelete}><FaTrashAlt size='2em' /></div></div></Link>
                </div>
            </div>
            <div className="lower-managecard">
                <div className='lower-managecard-img'>
                    <div><img src={`/Veg-Images/${plant.images}1.png`} /></div>
                </div>
                <div className='lower-managecard-img'>
                    <div><img src={`/Veg-Images/${plant.images}2.png`} /></div>
                </div>
                <div className='lower-managecard-img'>
                    <div><img src={`/Veg-Images/${plant.images}3.png`} /></div>
                </div>
            </div>

            <div className="section3">
                <div className="section3-info">
                    <BiWater color="#A4D8AD" size='4.5em' />
                    <div>Air humidity</div>
                    <div>{plot.airHumidity}</div>
                </div>
                <div className="section3-info">
                    <CiSun color="#A4D8AD" size='4.5em' />
                    <div>Light</div>
                    <div>{plot.light}</div>
                </div>
                <div className="section3-info">
                    <CiTempHigh color="#A4D8AD" size='4.5em' />
                    <div>Temperature</div>
                    <div>{plot.temp}</div>
                </div>
                <div className="section3-info">
                    <PiPlantThin color="#A4D8AD" size='4.5em' />
                    <div>Soil moisture</div>
                    <div>{plot.soilMoisture}</div>
                </div>
            </div>
        </div>
        <div className="button-section">
            <div className="button-section-info">
                <button className="button-section-info-button" onClick={handleWater}>
                    <div><IoWaterOutline /></div>
                    <div>WATER</div>
                </button>
                <button className="button-section-info-button" onClick={handleLight}>
                    <div><FaRegLightbulb /></div>
                    <div>LIGHT</div>
                </button>
            </div>
        </div>
    </div>
  )
}