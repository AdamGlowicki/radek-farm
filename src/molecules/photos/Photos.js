import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'


const animation = keyframes`

  0%{
    opacity: 0;
  }
  20%, 90% {
    opacity: 1;
  }
  
  100% {
   opacity: 0;
  }
`

const Img = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  animation: ${animation} 5s linear;
`

const Photos = () => {
    const [pictures, setPictures] = useState([
        'https://pixabay.com/get/ga62f9302fed4f0c3675f0a9e9f1b5c3a85ca6b70b5c87508b3c5217010eb756b052ff0966c639762da82c0f9f4dd9a74_1920.jpg',
        'https://pixabay.com/get/gbf4c8e3b72aca6066a0e5277a2ebf5af071c5c4d7b3fb0becf1f2aa4de74a00867bc7052680dbdd43d3b2e8f1ca1da6a_1920.jpg',
        'https://pixabay.com/get/g4a027b2ee10b223240832a8cb761fd3328358b081832ff95352be639a9e1738454efe42e7945031d4a88695d39101f31_1920.jpg',
    ])
    const [source, setSource] = useState(0)

  const onAnimationEnd = () => {
    if (source === pictures.length - 1) {
      setSource(0)
    } else {
      setSource(source + 1)
    }
  }

  return (
    <>
      {pictures.map((item, index) => (
        <div key={item}>
          {index === source && (
            <Img
              onAnimationEnd={onAnimationEnd}
              src={pictures[source]}
            />
          )}
        </div>
      ))}
    </>
  )
}

export default Photos