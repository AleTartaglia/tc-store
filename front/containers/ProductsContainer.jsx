import React, {useEffect} from 'react';
import Products from "../components/Products"
import {fetchProducts} from "../src/store/actions/productAction"


const ProductContainer = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts())
      }, [])

    

    return (
        <Products products={products}/>
    )
}

export default ProductContainer;