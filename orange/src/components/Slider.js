import React from 'react'

function Slider() {
  return (
      <div>
          


<div className="slide-image">
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
            <div className="carousel-item active">
              
              {/* <img src="https://orangecodingacademy.com/assets/img/1.jpg" alt className="d-block" style={{ width: '100%' }} /> */}
              <img src="https://images.unsplash.com/photo-1579389082366-6a268f7c20e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="ee" className="d-block" style={{width: '100%'}} />

      </div>
      <div className="carousel-item">
        <img src="https://cdn.discordapp.com/attachments/993069562834731044/1008674947838791691/j2_-_Copy.jpg" alt="ww" className="d-block" style={{width: '100%'}} />
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Slider