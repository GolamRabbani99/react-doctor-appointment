import React from 'react'

function Bookform() {
    return (
        <div className="container bg-info mt-2">
           <h1 className="text-center">Make an appointment</h1> 
           <form>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" />
    </div>

   
  </div>


  <div className="row mt-2">
  <div className="col">
      <input type="email" className="form-control" placeholder="email" />
    </div>
    <div className="col">
      <input type="tel" className="form-control" placeholder="phone number" />
    </div>
  </div>

  <div className="row mt-2">
  <div className="col">
  <select class="form-select" aria-label="Default select example">
  <option selected>Gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">others</option>
</select>

  
    </div>
    <div className="col">
    <select class="form-select" aria-label="Default select example">
  <option selected>department</option>
  <option value="1">medicine</option>
  <option value="2">surgery</option>
  <option value="3">aurthodpadics</option>
</select>
    </div>
  </div>



<div className="row">
    <div className="col">
    <label for="birthdaytime">Appointment date</label>
  <input type="date" id="booktime" name="booktime" className="form-control"/>
    </div>

   <div className="col">
   <label for="appt">Choose a time for your meeting:</label>

<input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required />

<small>Office hours are 9am to 6pm</small>
   </div>
</div>

<div className="col-md-12 text-center mt-4">
  <button type="submit" className="btn btn-primary text-center">make an appointment</button></div>
</form>
        </div>
    )
}

export default Bookform
