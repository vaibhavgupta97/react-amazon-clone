import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon  from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import LanguageIcon from '@material-ui/icons/Language';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
//import { Carousel } from 'react-responsive-carousel';

function Header() {
const [{ basket ,user}, dispatch] = useStateValue();
const handleAuthentication=()=>{
if(user){
auth.signOut();
}
}
return (
<div className="header">
<Link to=""><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt=""/>
</Link>
<div className="header__search">
<input className="header__searchInput" type="text" />
<SearchIcon className="header__searchIcon"/>
{/*Logo */}
</div>
<div className="header__nav">
<div className="header__option ">

<div className= "header__optionLineTwo"><strong><img className=" xyz"src="https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg"/>
</strong></div>

<div className= "header__optionLineTwo"><div className ="abc">EN </div></div>
</div>
<Link to={!user && '/login'}>
<div onClick={handleAuthentication}
className="header__option">
<span className= "header__optionLineOne">Hello ,{!user? 'Guest':user?.email}</span>
<span className= "header__optionLineTwo">{user? 'Sign Out':'Sign In'}</span>
</div>
</Link>
<Link to="/orders">
<div className="header__option">
<span className= "header__optionLineOne">Returns</span>
<span className= "header__optionLineTwo">& Orders</span>
</div>
</Link>
<Link to='/prime'>
<div className="header__option">
<span className= "header__optionLineOne">Try</span>
<span className= "header__optionLineTwo">Prime</span>
</div>
</Link>
</div>   
<Link to="/checkout">
<div className="header__optionBasket">
<ShoppingCartIcon />
<span className="header__optionLineTwo header__basketCount">{basket?.length}
</span>
</div>
</Link>
</div>
)
}

export default Header;
