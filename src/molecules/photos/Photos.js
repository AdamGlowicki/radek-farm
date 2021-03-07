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
        'https://picsum.photos/1000/1000',
        'https://picsum.photos/1001/1000',
        'https://picsum.photos/1002/1000',
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