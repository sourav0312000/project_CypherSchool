import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home() {
  return (
    <HomeContainer>
        <HomeImage src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='Home Image' />

        <HomeRow>
            <Product 
                key="15975341"
                id="15975341"
                title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 1TB) - Space Grey (2nd Generation)"
                price={120999}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202003?wid=470&hei=556&fmt=png-alpha&.v=1583544704305"
            />
            <Product 
                key="48612385"
                id="48612385"
                title="Apple Watch Series 5 GPS + Cellular, 44mm, Space Gray Aluminum Case with Black Sport Band"
                price={35499}
                rating={3}
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWW12?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1580325951651"
            />
        </HomeRow>
        <HomeRow>
            <Product 
                key="11235689"
                id="11235689"
                title="OnePlus 6T A6013 128GB Storage + 8GB Memory T-Mobile and GSM + Verizon Unlocked 6.41 inch"
                price={48755}
                rating={4}
                image="https://m.media-amazon.com/images/I/61-FZzBlpsL._AC_SX522_.jpg"
            />
            <Product 
                key="67282927"
                id="67282927"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={3795}
                rating={3}
                image="	https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product 
                key="23698523"
                id="23698523"
                title="Sony Wireless Headphones WH-CH510: Wireless Bluetooth On-Ear Headset with Mic for Phone-Call, Black"
                price={11299}
                rating={5}
                image="https://m.media-amazon.com/images/I/81di9mF9OVL._AC_SX355_.jpg"
            />
        </HomeRow>
        <HomeRow>
            <Product 
                key="89785631"
                id="89785631"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={86999}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
        </HomeRow>
        <HomeRow>
            <Product 
                key="79820133"
                id="79820133"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={420}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product 
                key="90037861"
                id="90037861"
                title={`Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl`}
                price={780}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </HomeRow>
        <HomeRow>
            <Product 
                key="30215896"
                id="30215896"
                title="The Love Hypothesis - Ali Hazelwood | The New York Times Bestseller"
                price={980}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51uq6tDW6SL._SX331_BO1,204,203,200_.jpg"
            />
            <Product 
                key="20874699"
                id="20874699"
                title="The Science of Interstellar - Kip Thorne"
                price={1599}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41+r39fPazL._SX258_BO1,204,203,200_.jpg"
            />
            <Product 
                key="55302110"
                id="55302110"
                title="Amazing Spider-Man Epic Collection: The Death of Captain Stacy"
                price={600}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61jLsuwtk7L._SX323_BO1,204,203,200_.jpg"
            />
        </HomeRow>
        <HomeRow>
            <Product 
                key="45685236"
                id="45685236"
                title="Sectional Sofa, L-Shape Faux Leather Sectional Sofa Couch Set with Chaise, Ottoman, 2 Toss Pillow Using for Living Room Furniture.（Grey）"
                price={97499}
                rating={4}
                image="https://static.onecms.io/wp-content/uploads/sites/23/2021/09/30/amazon-brand-rivet-sloane-mid-century-modern-sofa-couch-tout.jpg"
            />
        </HomeRow>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
`

const HomeImage = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const HomeRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
`