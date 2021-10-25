import React, { useState, useEffect } from 'react'
// import { GlobalContext } from "../context/GlobalContext"
import Axios from "axios"
import GiftCard from './GiftCard'


  // const [gifs, setGifs] = useState([]);

  // console.log("Gifs: ", gifs);

  // const getGifs = async () => {
  //   const baseURL = ("https://api.giphy.com/v1/gifs/random?api_key=YEovNuiHI4JkifcrTf8s6ntiBH5mxeQC&tag=&rating=g")
  //   const response = await axios.get(baseURL).catch((err) => console.log("Error", err))
  //   console.log(response)

  //   if(response && response.data) setGifs(response.data)
    
  // }

  // useEffect(() => {
  //   getGifs();
  // }, []);

function Gifs() {
  const [gifs, setGifs] = useState([])
 
  const callApi = async () => {
    const baseURL = (`https://api.giphy.com/v1/gifs/trending?api_key=YEovNuiHI4JkifcrTf8s6ntiBH5mxeQC&limit=25&rating=g`)
    const apiResponse = await Axios.get(baseURL).catch((err) => console.log("Error", err))
    const result = apiResponse.data.data
    console.log(result)
    setGifs(result)
  }
  
  useEffect(() => {
    callApi();
  }, []);
  // return apiAll
  console.log(gifs)
  
return (
  <div className="grid grid-cols-5 gap-4">
    {
      gifs.map((gif) => (
        <div>
          <GiftCard gif={gif}/>
        </div>
      ))
    }
  </div>
)

  }





  // const { APICall } = useContext(GlobalContext)

  // console.log(gifs)

  

// useEffect(() => {

//   setGifs(APICall)

// }, [APICall])
// console.log(setGifs)



  


export default Gifs


