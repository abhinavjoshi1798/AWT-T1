import React, { useState } from 'react'

const CascadingDropDown = () => {
  const states = ["up","delhi","gujarat"]
  const cities = {
    "up":['up1','up2','up3'],
    "delhi":['d1','d2','d3'],
    "gujarat":['g1','g2','g3'],
  }
  const [selectedState,setSelectedState]=useState()
  console.log(selectedState)

    return (
        <div style={{display:"flex"}}>
        <h5>CascadingDropDown</h5>
        
         <select onChange={(e)=>{setSelectedState(e.target.value)}}>
            {
            states.map(el=> {return <option key={el} value={el}>{el}</option>})}
         </select>
        
       {selectedState && <select>
            {
                cities[selectedState].map(el=>{
                 return <option>{el}</option>
                })
            }
        </select> } 
        
        </div>
    
  )
}

export default CascadingDropDown