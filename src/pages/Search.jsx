import React from 'react'
import "../styles/search.css"
import kost from "../images/kost1.svg";

function Search() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className='d-flex my-3 align-items-center'>
                        <img src={kost} alt="Kost" className='rounded' />
                        <div className='mx-4'>
                            <div className='d-flex'>
                                <p className='border rounded px-2'>Female</p>
                            </div>
                            <h5><strong>Bunga Nirwana</strong></h5>
                            <p className='small text-secondary'>Jl. Pahlawan No.4b Jakarta Pusat</p>
                            <div className='d-flex justify-content-between align-items-end'>
                                <h6>4.6</h6>
                                <h5><strong>Rp900.000</strong></h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex my-3 align-items-center'>
                        <img src={kost} alt="Kost" className='rounded' />
                        <div className='mx-4'>
                            <div className='d-flex'>
                                <p className='border rounded px-2'>Male</p>
                            </div>
                            <h5><strong>Bunga Nirwana</strong></h5>
                            <p className='small text-secondary'>Jl. Pahlawan No.4b Jakarta Pusat</p>
                            <div className='d-flex justify-content-between align-items-end'>
                                <h6>4.6</h6>
                                <h5><strong>Rp900.000</strong></h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex my-3 align-items-center'>
                        <img src={kost} alt="Kost" className='rounded' />
                        <div className='mx-4'>
                            <div className='d-flex'>
                                <p className='border rounded px-2'>Female</p>
                            </div>
                            <h5><strong>Bunga Nirwana</strong></h5>
                            <p className='small text-secondary'>Jl. Pahlawan No.4b Jakarta Pusat</p>
                            <div className='d-flex justify-content-between align-items-end'>
                                <h6>4.6</h6>
                                <h5><strong>Rp900.000</strong></h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex my-3 align-items-center'>
                        <img src={kost} alt="Kost" className='rounded' />
                        <div className='mx-4'>
                            <div className='d-flex'>
                                <p className='border rounded px-2'>Male</p>
                            </div>
                            <h5><strong>Bunga Nirwana</strong></h5>
                            <p className='small text-secondary'>Jl. Pahlawan No.4b Jakarta Pusat</p>
                            <div className='d-flex justify-content-between align-items-end'>
                                <h6>4.6</h6>
                                <h5><strong>Rp900.000</strong></h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex my-3 align-items-center'>
                        <img src={kost} alt="Kost" className='rounded' />
                        <div className='mx-4'>
                            <div className='d-flex'>
                                <p className='border rounded px-2'>Female</p>
                            </div>
                            <h5><strong>Bunga Nirwana</strong></h5>
                            <p className='small text-secondary'>Jl. Pahlawan No.4b Jakarta Pusat</p>
                            <div className='d-flex justify-content-between align-items-end'>
                                <h6>4.6</h6>
                                <h5><strong>Rp900.000</strong></h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="col-lg d-flex justify-content-center align-items-center border-start">
                    <h1>Ini Map</h1>
                </div>
            </div>
        </div>
    )
}

export default Search