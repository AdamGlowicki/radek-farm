import React, {useEffect, useReducer, useState} from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import {Link, Route, Switch} from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  section {
    width: 80%;
  }
`;

const Title = styled.div.attrs({
    className: 'mt-5 mb-4'
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  h3 {
    font-size: 40px;
  }
  
  p {
    font-size: 20px;
    width: 30%;
  }
`

const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
`

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
`

export const GalleryContext = React.createContext()

const Gallery = () => {
    const [photos, setPhotos] = useState([
        'https://picsum.photos/400/400',
        'https://picsum.photos/401/400',
        'https://picsum.photos/402/400',
        'https://picsum.photos/403/400',
        'https://picsum.photos/404/400',
        'https://picsum.photos/405/400',
        'https://picsum.photos/406/400',
        'https://picsum.photos/407/400',
        'https://picsum.photos/408/400',
        'https://picsum.photos/409/400',
    ])
    const [current, setCurrent] = useState(null)
    const [position, setPosition] = useReducer((prev, current) => ({...prev, ...current}), {
        prev: '',
        next: '',
    })

    const setPrev = (current) => {
        if (current === 0) {
            setPosition({prev: photos.length -1})
        } else {
            setPosition({prev: current -1})
        }
    }

    const setPost = (current) => {
        if (current === photos.length -1) {
            setPosition({post: 0})
        } else {
            setPosition({post: current + 1})
        }
    }

    useEffect(() => {
        if (current) {
            const index = photos.findIndex(item => current == item)
            setPrev(index)
            setPost(index)
        }
    }, [current])



    return (
        <GalleryContext.Provider value={{
            setCurrent,
            prev: photos[position.prev],
            post: photos[position.post],
        }}
        >
            <Wrapper>
                <section>
                    <Title>
                        <h3>jakis Tytuł</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, iusto mollitia omnis
                        </p>
                    </Title>

                    <Photos>
                        {photos.map((item, index) => (
                            <Link to={`/gallery/${encodeURIComponent(item)}`}>
                                <Img key={index} src={item}/>
                            </Link>
                        ))}
                    </Photos>
                    <Switch>
                        <Route exact path='/gallery/:id' component={Modal}
                        />
                    </Switch>
                </section>
            </Wrapper>
        </GalleryContext.Provider>
    );
};

export default Gallery;