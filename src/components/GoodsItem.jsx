function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background
    } = props;
    
    return(
        <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background} alt={name} />
        </div>
        <div className="card-content">
          {/* <span className="card-title">{name}</span> */}
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn blue darken-3">Buy</button>
          <span className="price right">{price} $</span>
        </div>
      </div>
    );
}

export {GoodsItem};