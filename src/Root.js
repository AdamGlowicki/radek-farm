import React from 'react';
import GlobalStyles from './theme/globalStyle/GlobalStyle';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Navigation from './molecules/Navigation/Navigation';
import Main from './molecules/main/Main';
import Gallery from './molecules/gallery/Gallery';
import About from './molecules/about/About';
import Contact from './molecules/contact/Contact';

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
                <Route exact path='/contact' component={Contact}/>
                {/*<Route exact path='/' component={Main}/>*/}
            </Switch>
        </BrowserRouter>
    );
};

export default Root;