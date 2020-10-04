import React,{useState} from 'react';
import "./Footer2.css";
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer2() {
    const [state,setState]=useState(true);
  let url="https://www.linkedin.com/in/vaibhav-gupta-742775114/";
  let element=<a href={url}><LinkedInIcon/></a>;
  const [state1,setState1]=useState(true);
 let url1="https://www.instagram.com/v_.aibhav/";
 let element1=<a href={url1}><InstagramIcon /></a>;
  const [state2,setState2]=useState(true);
 let url2="https://github.com/vaibhavgupta97";
 let element2=<a href={url2}><GitHubIcon/></a>;
  const [state3,setState3]=useState(true);
 let url3="https://www.facebook.com/vvagupta/";
  let element3=<a href={url3}><FacebookIcon /></a>;
 
    return (
<div className="footer__container2">
<div className="footer2__img">
<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
<button><LanguageIcon />English</button>
</div>
<div className="contectus">
<h3>Connect With Us</h3>
<div className="connectus">
<div className="App">
{state && element}
</div>
<div className="App">
{state1 && element1}
</div>
<div className="App">
{state2 && element2}
</div>
<div className="App">
{state3 && element3}
</div>
</div></div>
<div className="country">
<p>Australia</p>
<p>Brazil</p>
<p>Canada</p>
<p>China</p>
<p>France</p>
<p>Germany</p>
<p>Italy</p>
<p>Japan</p>
<p>Mexico</p>
<p>Netherlands</p>
<p>Singapore</p>
<p>Spain</p>
<p>United Arab Emirates</p>
<p>United Kingdom</p>
<p>United States</p>
</div>
    
</div>
    )
}

export default Footer2
