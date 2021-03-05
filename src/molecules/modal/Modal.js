import React, {useCallback, useContext, useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import {useHistory, useParams} from 'react-router';
import {useClickOutside} from '../../hooks/clickOutside';
import {GalleryContext} from '../../organisms/gallery/Gallery';

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
  }
`;

const Button = styled.button`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    transition: .3s;
    
    :hover {
      background-color: black;
      color: white;
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
                <Button onClick={handlePrev}>prev</Button>
                <Button second  onClick={handlePost}>next</Button>
            </div>
        </Wrapper>
    );
};

export default Modal;