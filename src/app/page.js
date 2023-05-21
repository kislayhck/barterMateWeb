'use client'
import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import About from './components/About';
import Download from './components/Download';

export default function Home() {


  return (
    <main>
      <Banner />
      <div class="jumbotron">
        <img src="/works.png" class="img-fluid w-100" alt="Responsive image" />
      </div>
      <About image="/about.png" />
      <Download />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5'>
            <h2>Circular <span style={{ color: "green" }}>Economy</span></h2>
            <p>BarterMate, as a digital platform, offers hassle-free scrapbooking and gets good prices along with lucrative offers from other channel partners.

              Our business model aligns with the principles of circular economy, which aims to reduce waste and maximize the value of resources.

              By promoting the use of their services, we are contributing to the circular economy model by helping businesses and individuals recycle their scrap materials.</p>
          </div>
          <div className='col-md-6'>
            <img src="/circular.png" class="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div>
        <p style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          padding: "2px",
          position: "absolute",
          width: "100%"
        }}>&copy; {new Date().getFullYear()} sanityG. All rights reserved.</p>
      </div>
    </main>
  )
}
