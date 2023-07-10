import './App.css'
import { useState } from 'react'
import axios from 'axios' 


function App() {
  
  const [users, setusers] = useState("")
  const [city, setcity] = useState([])

  let key = "67fe3dbd6f28d657f591dc7e70e1bc94" 
  let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

  const getDataOne = () => {
    axios.get(endpoint)
    .then((response)=>{
      console.log(response.data);
      setusers(response.data)
      console.log(users);
      setcity("")
             
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  
  return (
    <>
    <div className="col-8 mx-auto bg-info">
      <h1 className="text-center pt-5">FREE WEATHER APP</h1>
        <div className="pe-5 ps-5">
            <input className=" w-100 mt-3 bg-white " type="text" placeholder='Type City Name Here' onChange={(e)=>setcity(e.target.value)} value={city} />
        </div>
        <div className="pe-5 ps-5 mt-3">
            <button className="  w-100 bg-danger text-white wf-bolder" onClick={getDataOne}>Get Weather</button>
      </div>

      <table className=" col-4 border mt-4 table table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Visibility</th>
            <th>Cod</th>                      
          </tr>
        </thead>
        <tbody>
          <tr className="fw-bold">             
            <td>{users.name}</td>
            <td>{users.visibility}</td>
            <td>{users.cod}</td>
            
                                  
          </tr>
        </tbody>
      </table>      
    </div>   
    
    </>
  )
}

export default App