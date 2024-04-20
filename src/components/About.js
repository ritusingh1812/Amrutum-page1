import React from 'react'
import Review from './Review'
import special from './assets/specialize.svg';


export default function About() {
  return (
    <>
    <div className='container' style={{width:"628px",height:"430px",position:"relative",border:"1px ridge rgba(220, 220, 220, 1)",margin:"70px 90px 70px 150px",borderRadius:"25px",}}>
  <div className='row about-header d-flex justify-content-around flex-row'>
<div><p className='my-2 mx-2 fs-5 fw-bold'>A little about me</p></div>
<div className="my-2"style={{position:"absolute",left:"500px"}}><button className='btn btn-outline-success' >Follow <i className="fa-solid fa-plus"></i></button></div>
  </div>
  <div className='my-4 mx-4'>
        <p className=" fs-6"style={{opacity:"80%",color:"gray"}}>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the Institute of ..
</p>
<button className='btn' style={{marginLeft:"300px"}}><u>Read More</u></button>
<hr></hr> 
      </div>
      <div className="d-inline-flex p-4" style={{paddingRight:"100px"}}><h6 style={{marginTop:"8px"}}>Languages Spoken</h6>
        <p className='mx-3 ' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"5px",borderRadius:"15px"}}>English</p>

        <p className='mx-3 ' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"5px",borderRadius:"15px"}}>Hindi</p>
        <p className='mx-3 ' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"5px",borderRadius:"15px"}}>Telegu</p>
        </div>

        <div className="d-inline-flex p-2">
        <div className="p-2"><button className='btn btn-outline-success'  style={{borderRadius:"50%"}}><i className="fa-brands fa-facebook fa-lg" style={{color: "#d6e1d1;"}}></i></button></div>
        <div className="p-2"><button className='btn btn-outline-success'  style={{borderRadius:"50%"}}><i className="fa-brands fa-instagram fa-lg" style={{color: "#d6e1d1;"}}></i></button></div>
        <div className="p-2"><button className='btn btn-outline-success'  style={{borderRadius:"50%"}}><i className="fa-brands fa-youtube fa-lg" style={{color: "#d6e1d1;"}}></i></button></div>
        <div className="p-2"><button className='btn btn-outline-success'  style={{borderRadius:"50%"}}><i className="fa-brands fa-twitter fa-lg" style={{color: "#d6e1d1;"}}></i></button></div>

        </div>
    </div>


    
    <div className='container' style={{width:"628px",height:"251px",position:"relative",border:"1px ridge rgba(220, 220, 220, 1)",margin:"70px 100px 70px 150px",borderRadius:"25px"}}>
  <div className='row about-header d-flex justify-content-around flex-row'>
    <p className="fs-5 mx-2 my-2 fw-bold">I specialize in</p>
    </div >
    <div className='my-4 mx-5'>
    <img src={special} alt="special"></img>
    </div>
   
    
    </div>
    <div className='container ' style={{width:"628px",height:"251px",position:"relative",border:"1px ridge rgba(220, 220, 220, 1)",margin:"70px 100px 70px 150px",borderRadius:"25px"}}>
  <div className='row about-header d-flex justify-content-around flex-row'>
    <p className="fs-5 mx-2 my-2 fw-bold">The concerns I treat</p>
    </div>
    <div className='d-flex flex-row flex-wrap p-4'>
    <p className='mx-3 my-3 text-success' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"10px",borderRadius:"15px"}}>Skin Treatment</p>

    <p className='mx-3 my-3 text-success' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"10px",borderRadius:"15px"}}>Pregnancy</p>
    <p className='mx-3 my-3 text-success' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"10px",borderRadius:"15px"}}>Period Doubts</p>
    <p className='mx-3 my-3 text-success' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"10px",borderRadius:"15px"}}>Endometriosis</p>

    <p className='mx-3 my-3 text-success' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"10px",borderRadius:"15px"}}>Pelvic pain</p>
    <p className='mx-3 my-3 text-success' style={{backgroundColor:"rgba(46, 55, 164, 0.04)",padding:"10px",borderRadius:"15px"}}>Ovarian</p>
    <p className='mx-3 my-3 text-success' style={{backgroundColor:"white",border:"1px ridge",padding:"10px",borderRadius:"15px"}}>+5 more</p>

    </div>
    </div>

    <div className='container ' style={{width:"628px",height:"340px",position:"relative",border:"1px ridge rgba(220, 220, 220, 1)",margin:"70px 100px 70px 150px",borderRadius:"25px"}}>
  <div className='row about-header d-flex justify-content-around flex-row'>
    <p className="fs-5 mx-2 my-2 fw-bold">My Work Experience</p>
    
    </div>
    <p className='my-3 mx-3 fs-4 fw-bold' style={{color:"rgba(58, 100, 59, 1)"}}>I HAVE BEEN IN PRACTICE FOR 7+ YEARS</p>
    <hr className='mx-4'></hr>
    <div class="container">
  <div class="row">
    <div className='col-2'><i class="fa-regular fa-hospital" style={{color: "#5d8db1;"}}></i></div>
    <div class="col-6"> <p className='fs-7 fw-bold'>Midtown Medical CLinic</p><p style={{color:"gray"}}className='fs-7'>Senior Doctor</p></div>
    <div class="col-4"><p style={{color:"gray"}}className='fs-7'>2016-PRESENT</p></div>
    <div class="w-100"></div>
    <div className='col-2'><i class="fa-regular fa-hospital" style={{color: "#5d8db1;"}}></i></div>
    <div class="col-6"><p className='fs-7 fw-bold'>Midtown Medical CLinic</p><p style={{color:"gray"}}className='fs-7'>Senior Doctor</p></div>
    <div class="col-4"><p style={{color:"gray"}}className='fs-7'>2010-2015</p></div>
  </div>
</div>
   

    </div>
    <div className='container ' style={{width:"628px",height:"628px",position:"relative",border:"1px ridge rgba(220, 220, 220, 1)",margin:"70px 100px 70px 150px",borderRadius:"25px"}}>
  <div className='row about-header container d-flex justify-content-around flex-row'>
    <p className="fs-5 mx-2 my-2 fw-bold">Featured Reviews (103)</p>
    </div>
    <div className='row' style={{position:"relative",backgroundColor:"rgba(250, 250, 250, 1)",borderRadius:"20px", margin:"40px", padding:"20px"}}>
    <Review></Review>
      </div>


      <div className='row '  style={{position:"relative",backgroundColor:"rgba(250, 250, 250, 1)",borderRadius:"20px", margin:"40px", padding:"20px"}}>
<Review></Review>
      </div>

    </div>
    

    
      
    </>
  )
}
