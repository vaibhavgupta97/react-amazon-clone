import React from 'react';
import './Prime.css';
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
function Prime() {
    return (
    <div className="prime">
    <div className="prime__header">
    <Link to='/'>
    <img src="https://bollyy.com/wp-content/uploads/2020/06/Amazon-Prime-Video.png" alt="" className="prime__headerimg"/>
    </Link>
    <div className="left">
    <div className="earthlogo"><LanguageIcon /><span className="local">EN</span></div>
    <Link to="/signin">
    <div className="prime__signin"><h3>Sign In</h3></div></Link></div>
    </div>
    <div className="mirzapur"> 
    <div className="about">
   <h2>Welcome to Prime Video</h2>
   <h3>Join Prime to watch the latest movies, TV shows 
   and award-winning Amazon Originals</h3>
   <Link to='/'>
   <button className='b'>Try Prime</button></Link>
   </div>
   <div className="about2">
   <h2>Mirzapur Season 2</h2>
   <h3>Mirzapur Season </h3></div></div>
   <div className="more">
   <div className="inside"><img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg" alt=""/>
   <h2>Watch anywhere</h2><p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.</p></div>
   <div className="inside"><img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg" alt=""/>
   <h2>Download and go</h2><p>Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.</p></div>
   <div className="inside"><img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png" alt=""/>
   <h2>Data Saver</h2><p>Control data usage while downloading and watching videos on select phones or tablets.
</p></div></div>
<div className='prime__footer'>
<img src="https://bollyy.com/wp-content/uploads/2020/06/Amazon-Prime-Video.png" alt="" className="prime__footerimg"/>
<p>
<span>Terms and Privacy Notice</span> <span>Send us feedback </span><span>Help </span>
© 1997-2020, Actual site Amazon.com, Inc. or its affiliates</p>
</div>
   </div>
    )
}

export default Prime
