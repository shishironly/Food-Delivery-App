
import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return <div className="explore-menu" id="explore-menu">
    <h1>Explore Our Menu</h1>
    <p className="explore-menu-text">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum corporis ab ipsa quibusdam natus possimus soluta qui? Molestias sunt vel quidem tempore corrupti a et reiciendis harum ut iste.</p>

    <div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return (
            <div key={index} className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                <img src={item.menu_image} alt="menu-images" className={category===item.menu_name?"active":""} />
                <p>{item.menu_name}</p>
            </div>
        )
    })}
    </div>
  </div>;
};

export default ExploreMenu;
