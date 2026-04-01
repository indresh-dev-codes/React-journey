function ProductDetails(props)
{
    return(
        <div>
            <h2>Title: {props.title}</h2>
            <h4>Price:$ {props.price}</h4>
        </div>
    )
}
export default ProductDetails;