import React from 'react';
import "./Header2.css";
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Header2() {
    const [{ basket ,user}, dispatch] = useStateValue();
    return (
        <div className="header2">
        <div className="header2__container">
       
        <div className="header2__user">
        <div className="icon"><LocationOnIcon /></div><div className="user__items">
        <div className="huser">Deliver to {!user? 'Guest':user?.email}</div>
        <div className="location">Shimla 111001</div></div></div>
        <div className="header2__items">
        <p>Fresh</p>
        <p>Best Sellers</p>
        <p>{!user? 'Guest':user?.email}'s Amazon.in</p>
        <p>Buy Again</p>
        <p>Amazon Pay</p>
        <p>Mobiles</p>
        <p>Today's Deal</p>
        </div>
        <div className="header2__app">
        <img src="https://images-na.ssl-images-amazon.com/images/I/41ZXoyh-HZL._AC_SX184_.png" alt=""/>
        <p>Shopping made easy | Download the app</p>
        </div>
            
        </div>
        </div>
    
    )
}

export default Header2
