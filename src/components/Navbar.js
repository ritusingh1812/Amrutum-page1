import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar  amrutum-nav">
  <div className="container">
    <a className="navbar-brand" href="amrutum.in">
      <img src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FtvcqIh0Zk3rjG2~mAzdN6TBJMvkoe8RNA697ccuf6bjSHERbJH~zyeQlIh8frOPlHxN63G3cXnt6XIp2EvfkPLJN7WoAyMJMPX6Tsm7WdO2y~C6v85wN9Cv6qLiR2yWPiD-RXFAhYudm1PetPy0GPjCIbbCXUYjjE4L~7xiGBT79Qanj1GwUhKYwuEtNkPtfC5SMKh7iocOVRQa-ItwPwGZWN4x9f~05x1fFx-~YBrlG0AkIP90~CzRNqt31f3o5pFEynoQ1ORV~kgu1doeWEcIA8oqVxWfi4mamKQf1nI7x5kXhoBra4D-phaK1RNHkvdLqiQwQvsnAUkK4Ery-g_" alt="brand" style={{width:"50%",height:"80%"}}/>
    </a>
    <div className='group-links justify-content-center'>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">   
    <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link text-success fw-bold" href="doctors/amrutum.in">Find Doctors</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="/">About us</a>
        </li>
        </ul>
    </div>
   
    <div className='buttons-nav'>
      <button className='btn btn-outline-success btn-md mx-2'>
        Login
      </button>
      <button className='btn btn-success btn-md'>
        Sign-up
      </button>
    </div>
  </div>
</nav>
    </div>
  )
}
