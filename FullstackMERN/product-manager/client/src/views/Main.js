import axios from 'axios';
import {Switch, Route, Link} from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';
import Product from '../components/Product';
import UpdateProductForm from '../components/UpdateProductForm';

export default function Main() {
    

    function createProduct(product){
        axios.post("http://localhost:8000/api/products/create", product)
            .then(res => {console.log("Responsee: ", res)})
            .catch(err => console.log("There was an error: ", err))
    }

    

    return (
        <div>

            <Link to="/home">Home</Link>
            <Switch>
            <Route exact path="/home">
                <ProductForm message={"Create a product!"} submitFunction={createProduct} initialTitle={""} initialPrice={0} initialDescription={""}/>
                <ProductList />
            </Route>
            <Route exact path="/products/:id">
                <Product/>
            </Route>
            <Route exact path="/products/update/:id">
                <UpdateProductForm/>
            </Route>
            </Switch>
        </div>
    )
}
