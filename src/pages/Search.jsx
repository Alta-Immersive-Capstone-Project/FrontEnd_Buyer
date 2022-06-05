import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "../styles/search.css"
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import axios from 'axios';
import { URL } from '../components/URL';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [house, setHouse] = useState([]);

    const globalPosts = useSelector(state => state.posts.posts);
    const globalCity = useSelector(state => state.posts.city_id);
    const globalDistrict = useSelector(state => state.posts.district_id);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = `Search | Sewa Kost`;
        if (globalCity.length !== 0) {
            if (globalDistrict.length !== 0) {
                axios.get(`${URL}/cities/${globalCity}/districts/${globalDistrict}/houses`)
                    .then(data => {
                        setHouse(data.data.data);
                    })
                    .catch(err => {
                        console.log(err, ' ==> ini dari search district')
                    })
            } else {
                axios.get(`${URL}/cities/${globalCity}/districts/houses`)
                    .then(data => {
                        setHouse(data.data.data);
                    })
                    .catch(err => {
                        console.log(err, ' ==> ini dari search city')
                    })
            }
        } else {
            axios.get(`${URL}/houses/search?title=${globalPosts}`)
                .then(data => {
                    setHouse(data.data.data);
                })
                .catch(err => {
                    console.log(err, ' ==> ini dari search title')
                })
        }
    }, [globalPosts, globalCity, globalDistrict]);

    // MAPS
    const center = {
        lat: -6.905977,
        lng: 107.613144,
    };

    const makeRupiah = (input) => {
        let txt = input.toString().split('');
        let temp = 1;
        for (let i = txt.length - 1; i > 0; i--) {
            if (temp % 3 === 0) {
                txt.splice(i, 0, '.');
            }
            temp++;
        }
        return txt.join('');
    }

    return (
        <div className='container-fluid p-0'>
            <div className="row">
                <div className="col-lg-6 ps-4">
                    {house === null ? ('') : house.map((el, i) => (
                        <div key={i}>
                            <div className='d-flex my-3 align-items-center'>
                                <img src={el.image} alt="Kost" className='rounded image-search cursor-pointer' onClick={() => navigate(`/detail/${el.house_id}`)} />
                                <div className='mx-4 content-search'>
                                    <div className='d-flex'>
                                        <p className='border rounded px-2 text-capitalize'>{el.type}</p>
                                    </div>
                                    <h5 className='cursor-pointer' onClick={() => navigate(`/detail/${el.house_id}`)}><strong>{el.title}</strong></h5>
                                    <p className='small text-secondary'>{el.address}</p>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <h6>4.6</h6>
                                        <h5><strong>Rp{makeRupiah(el.price)}</strong></h5>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>

                <div className="col-lg-6 mx-auto">
                    <MapContainer center={center} zoom={13} scrollWheelZoom={true} zoomControl={false} attributionControl={false} className="map">
                        <div>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {house === null ? ('') : house.map((el, i) => (
                                <Marker key={i} position={{ lat: el.latitude, lng: el.longitude }}>
                                    <Popup>
                                        <h4 className='cursor-pointer' onClick={() => navigate(`/detail/${el.house_id}`)}>{el.title}</h4>
                                        <img src={el.image} alt="Kost" className='rounded image-search cursor-pointer' onClick={() => navigate(`/detail/${el.house_id}`)} />
                                        <p className='text-secondary'>{el.address}</p>
                                        <h5 className='text-end'><strong>Rp{makeRupiah(el.price)}</strong></h5>
                                    </Popup>
                                </Marker>
                            ))}
                        </div>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Search