import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, image, description, price }) => {
  // const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="item-image" />
        {!cartItems[id] ? 
        <img className="add" src={assets.add_icon_white} onClick={()=>addToCart(id)} /> : 
        <div className="food-item-counter">
            <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>}
      </div>
      <div className="food-item-info">
        <div className="name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItem;
