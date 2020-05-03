import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from "./App";
import {
    Overview,
    Resources,
    Station,
    Trader,
    Research,
    Shipyard,
    Fleet,
    Galaxy,
    Alliance,
    Cantine,
    Shop
} from "./pages";

const Router: React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/"             component={App}/>
                {/* Navigation */}
                <Route exact path="/overview"     component={Overview}/>
                <Route exact path="/resources"    component={Resources}/>
                <Route exact path="/station"      component={Station}/>
                <Route exact path="/trader"       component={Trader}/>
                <Route exact path="/research"     component={Research}/>
                <Route exact path="/shipyard"     component={Shipyard}/>
                <Route exact path="/fleet"        component={Fleet}/>
                <Route exact path="/galaxy"       component={Galaxy}/>
                <Route exact path="/alliance"     component={Alliance}/>
                <Route exact path="/cantine"      component={Cantine}/>
                <Route exact path="/shop"         component={Shop}/>
                    
                    {/* temporary redirect before implementing alt components */}
                    {/* <Redirect /> causes full rerender, which is unwanted */}
                    <Route exact path="/overview/alt"   render={() => <Redirect to="/overview"/>}/>
                    <Route exact path="/resources/alt"  render={() => <Redirect to="/resources"/>}/>
                    <Route exact path="/station/alt"    render={() => <Redirect to="/station"/>}/>
                    <Route exact path="/trader/alt"     render={() => <Redirect to="/trader"/>}/>
                    <Route exact path="/research/alt"   render={() => <Redirect to="/research"/>}/>
                    <Route exact path="/shipyard/alt"   render={() => <Redirect to="/shipyard"/>}/>
                    <Route exact path="/fleet/alt"      render={() => <Redirect to="/fleet"/>}/>
                    <Route exact path="/galaxy/alt"     render={() => <Redirect to="/galaxy"/>}/>
                    <Route exact path="/alliance/alt"   render={() => <Redirect to="/alliance"/>}/>
                    <Route exact path="/cantine/alt"    render={() => <Redirect to="/cantine"/>}/>
                    <Route exact path="/shop/alt"       render={() => <Redirect to="/shop"/>}/>
                
                <Route component={Overview}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;