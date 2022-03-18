import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';
import Product from '../components/Product';

export default function Main() {
    

    return (
        <div>

            <Link to="/home">Home</Link>
            <Switch>
            <Route exact path="/home">
                <ProductForm />
                <ProductList />
            </Route>
            <Route exact path="/products/:id">
                <Product/>
            </Route>
            </Switch>
        </div>
    )
}
