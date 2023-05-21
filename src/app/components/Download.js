import React from 'react'
import AppButton from "./AppButton";

function Download() {
  return (
    <div className='container border rounded-4 mt-5 mb-5 border-success' style={{background:'#E8E8E8',borderRadius:"18px"}}>
        <div className='row'>
            <div className='col-md-6 p-5'>
                <h1>Download the <span style={{color:"green"}}>App</span> <br />for best offers</h1>
                <p>We offer hassle-free scrapbooking and offer best price along with lucrative offers from other channel partners.</p>
            <AppButton />
            </div>
            <div className='col-md-6'>
                <img src="/phone.png" class="img-fluid w-100"/>
            </div>
        </div>
    </div>
  )
}

export default Download