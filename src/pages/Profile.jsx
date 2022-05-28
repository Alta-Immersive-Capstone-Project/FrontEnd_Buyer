import React from 'react'
import "../styles/profile.css"
import user from "../images/user.png"

function Profile() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 border-end'>
          <div>
            <img src={user} alt="User" className='mt-5 w-50' />
            <div className='mt-3'>
              <h4>Profile</h4>
              <h4>Booking History</h4>
            </div>
          </div>
        </div>

        <div className='col-8'>
          <div className='mt-5 mx-auto'>
            <div className='shadow-sm border rounded py-3'>
              <div className='d-flex px-4 mb-2'>
                <div className='head-text'>
                  <h5>Name</h5>
                </div>
                <div>
                  <h5>Andrew Fly</h5>
                </div>
              </div>
              <div className='d-flex px-4 mb-2'>
                <div className='head-text'>
                  <h5>Gender</h5>
                </div>
                <div>
                  <h5>Male</h5>
                </div>
              </div>
              <div className='d-flex px-4 mb-2'>
                <div className='head-text'>
                  <h5>E-mail</h5>
                </div>
                <div>
                  <h5>andrew.eyes@mail.com</h5>
                </div>
              </div>
              <div className='d-flex px-4 mb-2'>
                <div className='head-text'>
                  <h5>Phone Number</h5>
                </div>
                <div>
                  <h5>087612345678</h5>
                </div>
              </div>

              <div className='d-flex justify-content-end px-4 mt-4'>
                <button className='btn btn-primary'>Update</button>
              </div>
            </div>

            <div className='shadow-sm border rounded mt-3 mb-3 py-3 mx-auto'>
              <div className='d-flex justify-content-between px-4 mb-2'>
                <div className='password-text'>
                  <h5>Password</h5>
                </div>
                <div className='d-flex gap-3'>
                  <input type="text" className='border rounded px-2' value="********" disabled />
                  <button className='btn btn-primary'>Change Password</button>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-end px-4'>
              <button className='btn btn-danger'>Nonactive Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile