import React from 'react'

function Header() {
  return (
      <div>
          

 <div className="first">
  <nav className="navbar navbar-expand-sm bg-white navbar-white">
          <div className="container-fluid">
            {/* <img src={require(props.myImage)} alt="Ali" /> */}
      <a className="navbar-brand" href="../App"><img alt="" src={require('../orange-banner.png')} /> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="page-one.html"><b>Help</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#about"><b>Terms &amp; Conditions</b></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>



    </div>
  )
}

export default Header