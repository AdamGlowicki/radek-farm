import React, {useCallback, useContext, useEffect, useRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {useHistory, useParams} from 'react-router';
import {useClickOutside} from '../../hooks/clickOutside';
import {GalleryContext} from '../gallery/Gallery';

const slide = keyframes`
  0% { transform: translate(-50%, -50%) scaleX(0) }
  100% { transform: translate(-50%, -50%) scaleX(1)}
`

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.8);
  
  div {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 60px;
    background-color: whitesmoke;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slide} .3s linear;
    transform-origin: left;
  }
`;

const Button = styled.button`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: .3s;
    border: none;
    
    span {
      font-size: 30px;
    }
    
    ${({second}) => (
    second && css`
          left: auto;
          right: 10px;
      `
)}
`

const Img = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
`

const Modal = () => {
    const {setCurrent, prev, post} = useContext(GalleryContext)
    const {id} = useParams()
    const history = useHistory();
    const ref = useRef()

    useClickOutside(ref, () => {
        history.push('/gallery')
    })

    useEffect(() => {
        setCurrent(decodeURIComponent(id))
    }, [id])

    const handlePost = useCallback(() => {
        history.push(encodeURIComponent(post))
    }, [post])

    const handlePrev = useCallback(() => {
        history.push(encodeURIComponent(prev))
    }, [prev])

    return (
        <Wrapper>
            <div ref={ref}>
                <Img src={decodeURIComponent(id)} alt="obrazek"/>
                <Button onClick={handlePrev}><span className="fa fa-arrow-circle-left"></span></Button>
                <Button second  onClick={handlePost}><span className="fa fa-arrow-circle-right"></span></Button>
            </div>
        </Wrapper>
    );
};

export default Modal;