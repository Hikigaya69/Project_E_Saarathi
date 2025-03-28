import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {
  console.log(props)
  const locations=[
"Jalgar Cafe",
"Jalgar Cafe ramaswami",
"Jalgar Cafe anantaswami",

 ]
  return (
    <div>
     {locations.map(function(location){
        return  <div onClick={()=>{
          props.setVehiclePanel(true)
         props.setpanel(false)
        }}className='flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-7 w-9 rounded-full flex items-center justify-center '><i className="ri-map-pin-fill "></i></h2>
        <h4 className='font-medium'>{location}</h4>
       </div>
        
      
     })}
      

      

     

    </div>
    
    
  )
}

export default LocationSearchPanel
