// pages/index.js
import Link from 'next/link';
import Header from '../components/Header';
import SwipeBanner from '../components/SwipeBanner';
import Banner from '../components/Banner';
import SwipeLocation from '../components/SwipeLocation';
import FloatingButton from '../components/FloatingButton';
import Detect from './detect';
import About from './about';
import main_banner from '../public/MainBanner.png'
import banner1 from '../public/banner1.png'
import banner2 from '../public/banner2.png'
import banner3 from '../public/banner3.png'
import locationselect from '../public/where_proto.png'
import Image from "next/image";

import DesktopmainBanner from '../public/Desktop_main_Header.png'
import DesktopsamplePage from '../public/Desktop_Sample_page.webp'

export default function Home() {

 





  return (
    
    <main style={{backgroundColor:'#F6F4F1',width:'100%',height:'auto'}}>
    <Detect 
    mobilePage={
    <div>
    <Header></Header>
    
    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <FloatingButton></FloatingButton>
      <div style={{margin:'10px',marginTop:'120px'}}>
        <SwipeBanner image = {main_banner} ></SwipeBanner>
      </div>
      

      <h3 style={{color:'black',width:'100%',height:'20px', margin:'10px', marginLeft:'10%'}}>  💁‍♀️ 오늘의 픽업은 어디로 가볼까요?</h3>
      
      <SwipeLocation image = {locationselect}></SwipeLocation>
      
      <Link href="/about" style={{width:'100%',display:'flex',alignItems:'flex-start',margin:'10px'}}>
          <Banner image = {banner1}></Banner>
      </Link>


      <Link href="/about" style={{width:'100%',display:'flex',alignItems:'flex-end',justifyContent:'flex-end',margin:'10px'}}>
          <Banner image = {banner2}></Banner>
      </Link>


      <Link href="/about" style={{margin:'10px'}}>
        <Banner image = {banner3}></Banner>
      </Link>
      
    



    </div>
    </div>
    } 
    desktopPage={

    
    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div style={{ display: 'flex', height: 'auto', width: '100%' }} >
      <Image src={DesktopmainBanner} alt="MainHeader"  layout="responsive" objectFit="contain"/>
      </div>
      <Image src={DesktopsamplePage} alt="MainPage"  layout="responsive" objectFit="contain"/>
    </div>
    }></Detect>
    
    
    
    </main>
  );
}


