import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ProductsContainer from "../containers/ProductsContainer"
import SingleProductContainer from '../containers/SingleProductContainer';
import LoginContainer from "../containers/LoginContainer"
import CarruselContainer from '../containers/CarruselContainer';
import '../src/assets/style.scss'

const Main = () => {
    return (
        <React.Fragment>
            {/*<Navbar /> ACA IRIA LA NAVBAR */}
            <CarruselContainer/>
            <Switch>
                <Route exact path="/product/:id" component={SingleProductContainer} />
                <Route exact path="/products" component={ProductsContainer} />
                <Route exact path="/login" component={LoginContainer} />
            </Switch>
            {/* <Footer /> ACA IRIA EL FOOTER */}
        </React.Fragment>
    )
}

export default Main;