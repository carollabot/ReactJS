import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../asyncMock";
import { getProductsByCategory } from "../asyncMock"

const ItemListContainer = ({greetings}) => {
    const [ products, setPoducts ] = useState([])
    const [ error, setError ] = useState(false)
    const [loading, setLoading] = useState (true)

    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId){
            getProducts().then(res => {
                setPoducts(res)
            }).catch(error => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            }) 
        } else {
            getProductsByCategory(categoryId).then(res => {
                setPoducts(res)
            }).catch(error => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            }) 
        }
    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return <h1 className="greetings">{greetings}</h1> 
}

export default ItemListContainer 