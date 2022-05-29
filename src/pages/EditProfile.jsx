import React from 'react'
import "../styles/profile.css"

function EditProfile() {
    return (
        <div className='container'>
            <div className='mt-5 mx-auto'>
                <div className='shadow-sm border rounded py-3'>
                    <div className='d-flex px-4 mb-2'>
                        <div className='head-text'>
                            <h5>Name</h5>
                        </div>
                        <input type="text" value="Andrew Fly" className='form-control' />
                    </div>
                    <div className='d-flex px-4 mb-2'>
                        <div className='head-text'>
                            <h5>Gender</h5>
                        </div>
                        <input type="text" value="Male" className='form-control' />
                    </div>
                    <div className='d-flex px-4 mb-2'>
                        <div className='head-text'>
                            <h5>E-mail</h5>
                        </div>
                        <input type="email" value="andrew.eyes@mail.com" className='form-control' />
                    </div>
                    <div className='d-flex px-4 mb-2'>
                        <div className='head-text'>
                            <h5>Phone Number</h5>
                        </div>
                        <input type="text" value="087612345678" className='form-control' />
                    </div>
                    <div className='d-flex px-4 mb-2'>
                        <div className='head-text'>
                            <h5>Profile Picture</h5>
                        </div>
                        <input type="file" className='form-control' />
                    </div>

                    <div className='d-flex justify-content-end px-4 mt-4 gap-3'>
                        <button className='btn btn-outline-danger border-0'>Cancel</button>
                        <button className='btn btn-primary'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile