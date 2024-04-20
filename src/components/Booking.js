import React from 'react'

export default function Booking() {
  return (
    <>
      <div className='container' style={{width:"600px",height:"1100px",border:"1px ridge rgba(220, 220, 220, 1)",marginTop:"70px",borderRadius:"25px"}}>
        <div className="my-4 d-flex justify-content-between"style={{border:"1px ridge rgba(220, 220, 220, 1)",height:"45px",borderRadius:"10px"}}>
        <h6 className='my-2 mx-2'> Appointment Fee</h6>  <div className='fs-5 mx-3 fw-bolder' style={{color:"rgba(58, 100, 59, 1)"}}> ₹ 699.00</div>

       
        </div>
        <div className='container'>
          <div className='row'>
        <h6 className='mx-3 col'>Select your mode of session</h6> <hr className='col my-2'></hr>
        <div className='d-flex flex-row justify-content-around my-4'>
       

          <button type="button "  className=" mx-2 btn btn-outline  my-btn"><p className='fw-bold my-1'>In-clinic</p> <p className='fs-6 fw-bold' style={{color:"grey"}}>45 Mins</p> </button>
          <button type="button " className=" mx-2 btn btn-outline  my-btn"><p className='fw-bold my-1'>Video</p> <p className='fs-6 fw-bold' style={{color:"grey"}}>45 Mins</p> </button>
          <button type="button " className="  mx-2 btn btn-outline  my-btn"><p className='fw-bold my-1'>Chat</p> <p className='fs-6 fw-bold'style={{color:"grey"}}>10 Mins</p> </button>
          </div>
        </div>
        
          <div className='row'>
        <h6 className='mx-2 my-3 col'>Pick a time slot</h6> <hr className='col-5 my-4'></hr><div className='mx-3 col my-3' style={{borderRadius:"50%",width:"30px",height:"50px"}}><img style={{width:"30px",height:"30px"}} src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png" alt='cal'></img></div>
        </div>
        <div className='row' style={{border:"1.3px ridge", borderRadius:"20px"}}>
        <div className='d-flex flex-row justify-content-around my-4'>
       

       <button type="button "  className=" mx-2 btn btn-outline  my-btn"><p className='fw-bold my-1'>Mon 10 Oct</p> <p className='fs-6 fw-bold' style={{color:"green"}}>10 slots</p> </button>
       <button type="button " className=" mx-2 btn btn-outline  my-btn"><p className='fw-bold my-1'>Tue,11 Oct</p> <p className='fs-6 fw-bold ' style={{color:"red"}}>02 slots</p> </button>
       <button type="button " className="  mx-2 btn btn-outline my-btn"><p className='fw-bold my-1'>Wed,12 Oct</p> <p className='fs-6 fw-bold' style={{color:"#FFC700"}}>05 slots</p> </button>
       </div>
        </div>
        
        </div>

        <div className='my-4 mx-4'>
        <h6>Morning</h6>
        <div className='d-flex flex-row  my-4 flex-wrap align-items-start'>
       <button type="button"  className=" mx-2 my-2 btn my-btn-slot"><p className=' my-1'>9:00 AM</p>  </button>
       <button type="button " className=" mx-2 my-2 btn  my-btn-slot"><p className=' my-1'>9:30 AM</p>  </button>
       <button type="button " className="  mx-2 my-2 btn  my-btn-slot"><p className=' my-1'>10:00 AM</p> </button>
       <button type="button " className="  mx-2 my-2 btn my-btn-slot"><p className=' my-1'>10:15 AM</p> </button>
       <button type="button " className="  mx-2 my-2 btn  my-btn-slot"><p className='my-1 ' >10:45 AM</p> </button>
       <button type="button " className="  mx-2 my-2 btn  my-btn-slot"><p className='my-1 ' >11:00 AM</p> </button>

       </div>

       
        </div>
        <div className='my-4 mx-4'>
        <h6>Evening</h6>
        <div className='d-flex flex-row  my-4 flex-wrap align-items-start'>
       <button type="button"  className=" mx-2 my-2 btn my-btn-slot"><p className=' my-1'>4:00 PM</p>  </button>
       <button type="button " className=" mx-2 my-2 btn  my-btn-slot"><p className=' my-1'>4:15 PM</p>  </button>
       <button type="button " className="  mx-2 my-2 btn  my-btn-slot"><p className=' my-1'>4:30 PM</p> </button>
       <button type="button " className="  mx-2 my-2 btn my-btn-slot"><p className=' my-1'>4:45 PM</p> </button>
       <button type="button " className="  mx-2 my-2 btn  my-btn-slot"><p className='my-1 ' >5:15 PM</p> </button>
      

       </div>

       
        </div>
        <div class="d-grid gap-2">
  <button className="btn btn-md" style={{backgroundColor:"rgba(58, 100, 59, 1)",color:"white",margin:"10px 100px 100px 100px",padding:"10px"}}type="button">Make an Appointment</button>
  </div>
        </div>
        
    </>
  )
}
