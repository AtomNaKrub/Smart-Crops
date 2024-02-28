import { Link, useNavigate, useParams } from "react-router-dom"
import { BiWater } from "react-icons/bi";
import { CiSun } from "react-icons/ci";
import { CiTempHigh } from "react-icons/ci";
import { PiPlantThin } from "react-icons/pi";
import { FaLongArrowAltLeft } from "react-icons/fa";

import './ManageSettingCard.css'
import { useEffect, useState } from "react";
import { onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { db } from "../data/Firebase/firebase";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

export default function ManageSettingCard() {
    const { id } = useParams()
    const [manageHumidity, setManageHumidity] = useState(null)
    const [manageLight, setManageLight] = useState(null)
    const [manageTemp, setManageTemp] = useState(null)
    const [manageSoilMoisture, setManageSoilMoisture] = useState(null)
    const [plant, setPlant] = useState()

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
                setPlant(doc.data())
            },
            error: err => {
              console.log(err)
            }
        })
        return () => {unsubcribe()}
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(manageHumidity, manageLight, manageTemp, manageSoilMoisture)
        const updatePlot = updateDoc(doc(db, 'Crops-Management', id),{
            setHumidity: manageHumidity || plant.airHumidity,
            setSoilMoisture: manageSoilMoisture || plant.soilMoisture,
            setLight: manageLight || plant.light,
            setTemp: manageTemp || plant.temp,
        })
        navigate(`/manage/${id}`)
        return () => {
            updatePlot()
        } 
    }

    console.log(plant)

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="ManageSettingCard">
                <div className="upper-ManageSettingcard">
                    <div className="upper-ManageSettingcard-arrow"><Link><FaLongArrowAltLeft size="2em" color="white" /></Link></div>
                    <div className="upper-ManageSettingcard-text">Plot {id} Setting</div>
                </div>
            <div className="lower-ManageSettingcard">
                <div>
                    <div><BiWater size='5em' color="#A4D8AD" /></div>
                    <div className="lower-ManageSettingcard-text">Air humidity</div>
                    <div><input type="text" placeholder={plant ? plant.setHumidity : ''} className="lower-ManageSettingcard-input" onChange={(e) => setManageHumidity(e.target.value)} /></div>
                </div>
                <div>
                    <CiSun size='5em' color="#A4D8AD" />
                    <div className="lower-ManageSettingcard-text">Light</div>
                    <div><input type="text" placeholder={plant ? plant.setLight : ''} className="lower-ManageSettingcard-input" onChange={(e) => setManageLight(e.target.value)} /></div>
                </div>
                <div>
                    <CiTempHigh size='5em' color="#A4D8AD" />
                    <div className="lower-ManageSettingcard-text">Temperature</div>
                    <div><input type="text" placeholder={plant ? plant.setTemp : ''} className="lower-ManageSettingcard-input" onChange={(e) => setManageTemp(e.target.value)} /></div>
                </div>
                <div>
                    <PiPlantThin size='5em' color="#A4D8AD" />
                    <div className="lower-ManageSettingcard-text">Soil moisture</div>
                    <div><input type="text" placeholder={plant ? plant.setSoilMoisture : ''} className="lower-ManageSettingcard-input" onChange={(e) => setManageSoilMoisture(e.target.value)} /></div>
                </div>
            </div>
            <div className="button-ManageSettingcard">
                <button>SUBMIT</button>
            </div>
        </div>
      </form>
    </div>
  )
}