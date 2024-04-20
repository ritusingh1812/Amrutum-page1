import React from 'react'

export default function Profile() {
  return (
    <div className=" col container profile-div">
    <div className='row profile-first-half'>

    </div>
    <div className='row profile-second-half '>
    <h3 style={{position:"absolute", left:"200px"}}>Dr. Bruce Willis <img src='https://cdn-icons-png.flaticon.com/128/1271/1271380.png' style={{width:"20px",height:"20px"}} alt='tick'></img></h3>
    <h6 className='text-success' style={{position:"absolute", top:"180px",left:"200px"}}>Gynecologist</h6>
    <p style={{position:"absolute", top:"160px",left:"200px"}}>4.2 <img src='https://cdn-icons-png.flaticon.com/128/10801/10801392.png' alt='stars'></img></p>

<div className='container d-flex flex-row justify-content-center' style={{paddingTop:"20px"}}>
<div class="text-center ">
<p className='mx-3 fw-bold' style={{color:"rgba(58, 100, 59, 1)"}}>Followers</p>     
 <p class="mb-0 fw-bold fs-5">850</p>
  </div>
  <div class="text-center ">
<p className='mx-3 fw-bold' style={{color:"rgba(58, 100, 59, 1)"}}>Following</p>     
 <p class="mb-0 fw-bold fs-5">18K</p>
  </div>
  <div class="text-center ">
<p className='mx-3 fw-bold' style={{color:"rgba(58, 100, 59, 1)"}}>Posts</p>     
 <p class="mb-0 fw-bold fs-5">250</p>
  </div>



</div>


    <button className='btn btn-success my-3' style={{width:"274px",height:"59px",backgroundColor:"rgba(58, 100, 59, 1)",
position:"absolute", right:"50px"}}> Book an Appointment</button>

    </div>
      <img className='dp' src='https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oen0QfknI4qf6qmgX~ar9NXcmnzj0PELT3IvqseAdUDwjvD1qj-UVTj5DuRj~MyVBNmLXIyG9Gr6nT~L1yJqL0i1RoF4JwzZd0WlL29KWZ5a9qoWPtXH6SozWWl3zvbEbUmDBBYDGJWT5iPaNe~2V6ywZXm-8KJLYPNs4iCiB0SCbQIjindq5VC-YTdI6ebQUGFbw2vgJzgoA089c0zw6f8JD4VP6TgXFvhYzsIZX4sEr--yK8NWifD9x7nEzJZ6j9eRst86yCm2sDEYEstr54YJyK4BM8Z0zOmbBjbZxhbawdooaScKN9PLcYNhqQppFFQGTck1JlCo5e7mR49JNg__' alt="dp">
      </img>
     
    </div>
  )
}
