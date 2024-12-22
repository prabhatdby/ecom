import { useContext } from "react";
import { CartContext } from "./CartContext";
function CartItems(){
    const { removeCartItem } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    return (
        <>
      <div className="row row-cols-12 row-cols-md-3 g-5">
      {
          cart.map((item, i) => (
            <div key={i} className="card border-5" style={{ width: '19rem', height: 'auto' }}>
              <img src={item.images[0]} className="card-img-top w-50 h-50" alt="..." style={{ alignSelf: 'center' }} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{`Price: $${item.price}`}</p>
                <p className="card-text">{`Rating: ${item.rating}`}</p>
                <a className="btn btn-primary"  href="#" onClick={()=>removeCartItem(i)}>Remove</a>
                {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          ))
        }
      </div>
        </>
    )
}

export default CartItems;