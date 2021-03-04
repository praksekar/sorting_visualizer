import React, { useState, useEffect } from 'react'
import BarContainer from './components/BarContainer'
import { Container } from 'react-bootstrap'
import ControlPanel from './components/ControlPanel'

export default function App() {

  const numBars = 100
  const barValueRange = 100
  const [barValues, setBarValues] = useState([])
  const [barColors, setBarColors] = useState([])
  const [speed, setSpeed] = useState(50)
  let [stop, setStop] = useState(false)
  const [sleepTime, setSleepTime] = useState()
  const [interval, setTheInterval] = useState()

  //useEffect(() => console.log(speed), [speed])

  function genRandArray() {
    let newArr = [];
    for (let i = 0; i < numBars; i++) {
      newArr.push(Math.floor(Math.random() * barValueRange))
    }
    setBarValues(newArr)
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // useEffect(() => {
  //   interval = setInterval(() => { console.log("sldkfj") }, 2000)
  //   clearInterval(interval)
  // })

  useEffect(() => {
    sleep(100)
    if (stop) {
      console.log("interval1", interval)
      clearInterval(interval)
    }
    else {
      setTheInterval(setInterval(() => { console.log("sldkfj", stop) }, 2000))
      console.log("interval2", interval)
    }
  }, [stop])

  //console.log("intervalstop"
  async function bubbleSort() {
  }




  function insertionSort() {

  }

  function mergeSort() {

  }

  function radixSort() {

  }


  return (
    //{console.log("stop", stop)}
    <div>
      running
      < ControlPanel stop={stop} setStop={setStop} genRandArray={genRandArray} speed={speed} setSpeed={setSpeed} bubbleSort={bubbleSort} />
      <BarContainer barColors={barColors} barValues={barValues} bubbleSort={bubbleSort} />
    </div>
  )
}

