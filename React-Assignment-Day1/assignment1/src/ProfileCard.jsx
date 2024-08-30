import React from 'react'

function ProfileCard({name,age,location}) {
  return (
    <div style={{height:"20vh", width:"20vw" ,backgroundColor:"gray" ,textAlign:"center"}}>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{location}</p>

    </div>
  )
}

export default ProfileCard
