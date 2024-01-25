import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

import './DetailedSelectPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { onSnapshot, doc, updateDoc, addDoc, collection, setDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { db } from '../../data/Firebase/firebase';
import { addPlot, deletePlot } from '../../data/Slices/BackEndSide';

export default function DetailedSelectPage() {

  const { id } = useParams()
  const [plotId, setPlotId] = useState()
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const plant = useSelector(state => state.FrontEndData.data.find((e) => (e.id === id)))

  const myplant = useSelector(state => state.BackEndData.data)

  const auth = getAuth();
  signInWithEmailAndPassword(auth, 'atom123@gmail.com', 'Pattanaleenakul39945!')
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!id) return
    setLoading(true)
    const unsubcribe = onSnapshot(doc(db, 'Crops-Management', plotId), {
      next: doc => {
        dispatch(addPlot({id: doc.id, ...doc.data()}))
        setLoading(false)
        navigate('/')
      },
      error: err => {
        console.log(err)
        setLoading(false)
      }
    })
    const updatePlot = updateDoc(doc(db, 'Crops-Management', plotId),{
      airHumidity: plant.airHumidity,
      soilMoisture: plant.soilMoisture,
      title: plant.title
    })
    const addPlotFirebase = setDoc(doc(db, 'Crops-Code', plotId),{
      id: plotId
    })
    return () => {unsubcribe()
                  updatePlot()
                  addPlotFirebase()}
  }

  if (!plant) return <p>Plant not found!!</p>

  if (loading) return <p>Loading....</p>

  return (
    <div>
      <div className="DetailedCard">
            <div className="upper-detailedcard">
                <div>
                    <Link to={`/select`}><div className="upper-detailedcard-arrow"><div><FaArrowLeftLong size='2em' /></div></div></Link>
                </div>
                <div className="upper-detailedcard-text">{plant.title}</div>
            </div>
            <div className="lower-detailedcard">
                <div className='lower-detailedcard-img'>
                <div><img src={`/Veg-Images/${plant.images}1.png`} /></div>
            </div>
            </div>
            <div className="section3-detailed">
                <div className="section3-detailed-info">
                    <div className='section3-detailed-info-header'>{plant.title}</div>
                    <div>
                      <ul>
                        {plant.description.map((des, index) => (
                          <li key={index} className='section3-detailed-info-lists'>{des}</li>
                        ))}
                      </ul>
                    </div>
                </div>
                <div className="section3-detailed-info">
                    <div className='section3-detailed-info-header'>How to grow</div>
                    <div>
                      <ul>
                      {plant.grow.map((grow, index) => (
                          <li key={index} className='section3-detailed-info-lists'>{grow}</li>
                      ))}
                      </ul>
                    </div>
                </div>
            </div>
            <div className='section4-detailed'>
              <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className='section4-detailed-form'>
                    <div><div>ID</div><input type="text" required placeholder='plot id' onChange={(e) => {setPlotId(e.target.value)}} /></div>
                    <div className='section4-detailed-form-button'><button>ADD TO PLOT <FaCirclePlus /></button></div>
                  </div>
                </form>
              </div>
            </div>
      </div>
    </div>
  )
}