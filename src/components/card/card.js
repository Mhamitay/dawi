import React from 'react'
function Card({title,descriptioin}) {
  return (
    <div className='category-body'>
    {/* <image ></image> */}
    <p>//image</p>
    <h2>{title}</h2>
    <p>{descriptioin}</p>
  </div>  
  )
}

export default Card