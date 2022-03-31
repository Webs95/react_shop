function Basket(props) {
    const {quantity = 0} = props;
    return (
        <div className="basket blue darken-3 white-text">
            <i className="material-icons">shopping_basket</i>
            {
                quantity ? <span className="basket-quantity">{quantity}</span> : null
            }
        </div>
    )
}

export {Basket};