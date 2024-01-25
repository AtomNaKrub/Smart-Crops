import { useSelector } from "react-redux";
import AddPlotButton from "../../Components/AddPlotButton";
import HomeCard from '../../Components/HomeCard'
import { useEffect, useState, useCallback } from "react";
import { collection, query, onSnapshot, getDocs } from 'firebase/firestore'
import { db } from "../../data/Firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function Home() {
  const [plants, setPlants] = useState([])

  const auth = getAuth();
  signInWithEmailAndPassword(auth, 'atom123@gmail.com', 'Pattanaleenakul39945!')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
  });



  const getData = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "Crops-Code"));
    let plot = []
    querySnapshot.forEach((doc) => {
      plot.push(doc.data().id)
    })
    const plotSorted = plot.sort()
    setPlants(plotSorted)
  }, [])

  useEffect(() => {
    getData()
}, []);

  return (
    <div>
      {plants && (plants.map((doc) => (
        <HomeCard id={doc} key={doc}/>
      )))}
        <br />
        <AddPlotButton />
    </div>
  )
}