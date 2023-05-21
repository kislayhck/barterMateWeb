import React from 'react'

function About(props) {
  return (
    <div className='jumbotron'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={props.image} class="img-fluid w-100"/>
            </div>
            <div className='col-md-5 p-5'>
                <h1>Making Earth <strong><span style={{color:"green"}}>Better</span></strong></h1>
                <p style={{color:"green"}}>Help us to make Earth a better place to live</p>
                
                <div>
                <p>Be a part of the green revolution and help reduce waste with BarterMate's new initiative - <span style={{color:"green"}}> 1 tree for every 1000 kgs of scrap. </span></p>
                <h5>Join us in creating a greener future, one tree at a time.</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About