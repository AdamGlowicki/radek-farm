import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './theme/globalStyle/GlobalStyle';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import {Redirect} from 'react-router';
import Navigation from './molecules/Navigation/Navigation';
import Main from './molecules/main/Main';
import Gallery from './molecules/gallery/Gallery';
import Modal from './molecules/modal/Modal'
import About from './molecules/about/About';

const Root = () => {
    console.log()
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/gallery' component={Gallery}/>
                <Route exact path='/about' component={About}/>
                {/*<Route exact path='/' component={Main}/>*/}
                {/*<Route exact path='/' component={Main}/>*/}
            </Switch>
        </BrowserRouter>
    );
};

export default Root;