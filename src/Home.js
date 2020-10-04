import React from 'react';
import './Home.css';
import Product from './Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {
return (
<div className="home">
<div className="home__container">
<img  className="home__image"
src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic
/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
alt=""/>
<div className="home__row">
<Product id="12322332"
title="OnePlus 7T Pro (Haze Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4085mAH Battery)"
price={43999.00}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SL1500_.jpg"
/>
<Product
id="495380658"
title="DELL XPS 9300 13.3-inch UHD Laptop (10th Gen Core i7-1065G7/16GB/1TB SSD/Windows 10 Home Plus & MS Office/Intel HD Graphics), White"
price={234800.00}
rating={3}
image="https://images-na.ssl-images-amazon.com/images/I/71ZCiccNU8L._SL1280_.jpg"
/>
</div>
<div className="home__row">
<Product id="12321349"
title="The Kite Runner Paperback – by Khaled Hosseini"
price={399.00}
rating={5}
image="data:image/webp;base64,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"
/>

<Product 
id="49538069"
title="LG Ultragear 27 240Hz, 1ms, G-Sync Compatible, HDR 10, IPS Display Gaming Monitor, Height Adjust, Pivot Stand, Display Port, HDMI Port - 27GN750"
price={30999.45}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/71VHmNBWJQL._SL1500_.jpg"
/>
</div>
<div className="home__row">
<Product id="12321341"
title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
price={279.00}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
/>
<Product
id="49538094"
title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
price={17556.45}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
/>
</div>
<div className="home__row">
<Product id="12323332"
title="WOW BUZZING BEE - Raw Natural Unprocessed Raw Tulsi Forest Flower Honey 550 GMS & Get Free Another Flavour Raw Flower Honey 55 GMS Combo Pack"
price={535.00}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/41piDDfzN2L.jpg"
/>
<Product
id="495380858"
title="Killer Office Laptop Bag - Epilex Laptop Messenger Bag"
price={1139.00}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/81L-QXYl9FL._SL1466_.jpg"
/>
</div>
<div className="home__row">
<Product
id="4903850"
title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
price={14690.86}
rating={3}
image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
/>
<Product
id="23445930"
title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
price={7271.60}
rating={5}
image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
/>
<Product
id="3254354345"
title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
price={44000.58}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
/></div>
<div className="home__row">
<Product
id="90829332"
title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
price={80434.99}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
/></div>
<div className="home__row">
<Product
id="99829332"
title="Burnlab Basic Gym Gloves with Wrist Support"
price={720}
rating={2}
image="https://images-na.ssl-images-amazon.com/images/I/61Lf1WQhTwL._SL1263_.jpg"
/>
<Product
id="90829885"
title="Dettol Cambridge N95 Mask for Protection from Virus, Bacteria, Pollution – Reusable, Washable, with Breathing Valve (Blue, Large)"
price={799.90}
rating={3}
image="https://images-na.ssl-images-amazon.com/images/I/61K5VXZHqmL._SL1000_.jpg"
arrivingdate="2-3 days to arrive"
/>
<Product
id="90829449"
title="Nutella Hazelnut Spread with Cocoa, 350g"
price={380.00}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/715eSstP-ZL._SL1500_.jpg"
arrivingdate="2-3 days to arrive"
/></div>
</div>
</div>
)
}

export default Home
