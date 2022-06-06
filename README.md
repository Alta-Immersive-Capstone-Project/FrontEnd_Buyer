# About This Project

Proyek ini adalah kolaborasi antara Frontend dan Backend di program Immersive Alterra Acedemy. Proyek ini adalah tugas akhir untuk hari kelulusan kami. Repository ini adalah bagian Frontend untuk halaman customer.

* Membuat desain UI
* Integrasi dengan plugin map (Leaflet)
* Menggunakan Reactjs
* Deployment


## UI
Figma: https://www.figma.com/file/wOYbQqc2gSam6FVGd04vx0/Sewa-Kos?node-id=0%3A1

## Deployment
https://sewa-kost.vercel.app/


## Penggunaan Api pada setiap Page

**Login**
----

* **URL**

`http://18.136.202.111:8000/login`

* **Method:**

 `POST`
 
 *  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
        name: "user",
        email: "user@gmail.com",
    }
  ```

* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ``{
  "code": 200,
  "message": "Success Login",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHBpcmVkIjoxNjUxMTkyMjUwLCJ1c2VySWQiOjF9.p7TgrQ3phLHYB10pO4XsjCHBUTKVvrH34OqX4XPzyCI"
}
    ```
 
* **Error Response:**


  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    `{
      "code": 500,
      "message": "Access Database Error"
     }`

**Home**
----
  
* **URL**

  `http://18.136.202.111:8000/house/search`

* **Method:**

  `GET`
  
*  **URL Params**

    `{
       headers: {
         Authorization: "Bearer " + localStorage.getItem("token"),
         },
      }`

* **Data Params**

    **Required:**

  ```javascript
  
  "data": [
    {
      "title": "Kost Kotagede Wisma Putri Rinjani",
      "brief": "Kost Kotagede Wisma Putri Rinjani merupakan kost yang berlokasi di daerah Kabupaten Sleman Kota Depok. Lokasi Kost strategis dekat dengan area perkuliahaan dan perkantoran, serta dekat dengan transportasi umum, dan untuk kebutuhan sehari - hari lokasi kost dekat dengan supermarket, kampus, dan perpustakaan.",
      "owner_name": "Endang Soeramti",
      "owner_phone": "08912345678",
      "address": "Jl Krodan Raya Gg Alpukat No14B",
      "available": 3,
      "room_id": 1,
      "price": 600000,
      "type": "Putri",
      "rating": 4.5,
      "district_id": 13,
      "district": "Sleman",
      "images_url": "string"
    }
  ],
 
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
  "code": 200,
  "message": "Success get data",
  "data": [
    {
      "title": "Kost Kotagede Wisma Putri Rinjani",
      "brief": "Kost Kotagede Wisma Putri Rinjani merupakan kost yang berlokasi di daerah Kabupaten Sleman Kota Depok. Lokasi Kost strategis dekat dengan area perkuliahaan dan perkantoran, serta dekat dengan transportasi umum, dan untuk kebutuhan sehari - hari lokasi kost dekat dengan supermarket, kampus, dan perpustakaan.",
      "owner_name": "Endang Soeramti",
      "owner_phone": "08912345678",
      "address": "Jl Krodan Raya Gg Alpukat No14B",
      "available": 3,
      "room_id": 1,
      "price": 600000,
      "type": "Putri",
      "rating": 4.5,
      "district_id": 13,
      "district": "Sleman",
      "images_url": "string"
    }
  ],
  "error": false
}`
    ```
 
* **Error Response:**

* **Code:** 400 BAD REQUEST <br />
    **Content:** 
    `{
  "message": "ERROR Bad Request",
  "code": 400,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 401 MISSING TOKEN <br />
  **Content:** 
    `{
  "message": "token missing or invalid jwt",
  "code": 401,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 404 NOT FOUND <br />
  **Content:** 
    `{
      "message": "not found",
      "code": 404,
      "error": true,
      "data": {}
    }`
    
    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    `{
      "code": 500,
      "message": "Access Database Error"
    }`
    
    
    
**Detail Page**
----
  
* **URL**

  `http://18.136.202.111:8000/houses/id`

* **Method:**

  `GET`
  
*  **URL Params**

  `None`

* **Data Params**

    **Required:**

  ```javascript
 `{
  "code": 200,
  "message": "Success get data",
  "data": {
    "house_id": 1,
    "title": "Kost Kotagede Wisma Putri Rinjani",
    "brief": "Kost Kotagede Wisma Putri Rinjani merupakan kost yang berlokasi di daerah Kabupaten Sleman Kota Depok. Lokasi Kost strategis dekat dengan area perkuliahaan dan perkantoran, serta dekat dengan transportasi umum, dan untuk kebutuhan sehari - hari lokasi kost dekat dengan supermarket, kampus, dan perpustakaan.",
    "owner_name": "Endang Soeramti",
    "owner_phone": "8912345678",
    "address": "Jl Krodan Raya Gg Alpukat No14B",
    "slot_room": 7,
    "available": 3,
    "image": "http://image.com",
    "latitude": -6.934599899999999,
    "longitude": 110.89429059999999,
    "dist_id": 11,
    "created_at": "2022-05-25T07:02:13:000+07:00",
    "updated_at": "2022-05-25T07:02:13:000+07:00"
  },
  "error": false
}`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
  "code": 200,
  "message": "Success get data",
  "data": {
    "house_id": 1,
    "title": "Kost Kotagede Wisma Putri Rinjani",
    "brief": "Kost Kotagede Wisma Putri Rinjani merupakan kost yang berlokasi di daerah Kabupaten Sleman Kota Depok. Lokasi Kost strategis dekat dengan area perkuliahaan dan perkantoran, serta dekat dengan transportasi umum, dan untuk kebutuhan sehari - hari lokasi kost dekat dengan supermarket, kampus, dan perpustakaan.",
    "owner_name": "Endang Soeramti",
    "owner_phone": "8912345678",
    "address": "Jl Krodan Raya Gg Alpukat No14B",
    "slot_room": 7,
    "available": 3,
    "image": "http://image.com",
    "latitude": -6.934599899999999,
    "longitude": 110.89429059999999,
    "dist_id": 11,
    "created_at": "2022-05-25T07:02:13:000+07:00",
    "updated_at": "2022-05-25T07:02:13:000+07:00"
  },
  "error": false
}`
    ```
 
* **Error Response:**

* **Code:** 400 BAD REQUEST <br />
    **Content:** 
    `{
  "message": "ERROR Bad Request",
  "code": 400,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 401 MISSING TOKEN <br />
  **Content:** 
    `{
  "message": "token missing or invalid jwt",
  "code": 401,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 404 NOT FOUND <br />
  **Content:** 
    `{
      "message": "not found",
      "code": 404,
      "error": true,
      "data": {}
    }`
    
    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    `{
      "code": 500,
      "message": "Access Database Error"
    }`
    
    
    * **URL**

  `http://18.136.202.111:8000/houses/id/reviews`

  * **Method:**

  `GET`
  
  * **Data Params**

    **Required:**

  ```javascript
 `{
  "code": 200,
  "data": [
    {
      "name": "User",
      "comment": "kos dan pelayanan bagus",
      "rating": 4,
      "created_at": "2022-06-04T08:47:00.344Z"
    }
  ],
  "message": "Success Get By House ID",
  "rating": {
    "five": 0,
    "four": 1,
    "one": 0,
    "three": 0,
    "two": 0
  },
  "total_rating": 4
}`

```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
  "code": 200,
  "data": [
    {
      "name": "User",
      "comment": "kos dan pelayanan bagus",
      "rating": 4,
      "created_at": "2022-06-04T08:47:00.344Z"
    }
  ],
  "message": "Success Get By House ID",
  "rating": {
    "five": 0,
    "four": 1,
    "one": 0,
    "three": 0,
    "two": 0
  },
  "total_rating": 4
}`
    ```
 
* **Error Response:**

* **Code:** 400 BAD REQUEST <br />
    **Content:** 
    `{
  "message": "ERROR Bad Request",
  "code": 400,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 401 MISSING TOKEN <br />
  **Content:** 
    `{
  "message": "token missing or invalid jwt",
  "code": 401,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 404 NOT FOUND <br />
  **Content:** 
    `{
      "message": "not found",
      "code": 404,
      "error": true,
      "data": {}
    }`
    
    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    `{
      "code": 500,
      "message": "Access Database Error"
    }`
    
    
  * **URL**

  `http://18.136.202.111:8000/transactions`

* **Method:**

  `POST`
  
  *  **URL Params**

  `{
        headers: { Authorization: Bearer ${localStorage.getItem("token")} }`
        
 * **Data Params**

    **Required:**

  ```javascript
 `{
  "room_id": 1,
  "house_id": 1,
  "price": 1000000,
  "check_in": 1653440800207,
  "duration": 7
}`

```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
  "code": 200,
  "data": {
    "booking_id": "LK-2117-453654642",
    "name": "user",
    "email": "user@gmail.com",
    "phone": "08134567",
    "title": "Kost Kotagede Wisma Putri Rinjani",
    "address": "Jl Krodan Raya Gg Alpukat No14B",
    "price": "4500000,",
    "check_in": "1970-01-06T13:00:54.642+07:00",
    "duration": 7,
    "transaction_status": "processing",
    "created_at": "2022-06-04T13:30:05.36+07:00"
  },
  "message": "Success Created Transaction"
}`
    ```
 
* **Error Response:**

* **Code:** 400 BAD REQUEST <br />
    **Content:** 
    `{
  "message": "ERROR Bad Request",
  "code": 400,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 401 MISSING TOKEN <br />
  **Content:** 
    `{
  "message": "token missing or invalid jwt",
  "code": 401,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 404 NOT FOUND <br />
  **Content:** 
    `{
      "message": "not found",
      "code": 404,
      "error": true,
      "data": {}
    }`
    
    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    `{
      "code": 500,
      "message": "Access Database Error"
    }`
    
   **History Page**
----
  
* **URL**

  `http://18.136.202.111:8000/transactions`

* **Method:**

  `GET`
  
*  **URL Params**

    `{
       headers: {
         Authorization: "Bearer " + localStorage.getItem("token"),
         },
      }`

* **Data Params**

    **Required:**

  ```javascript
  
  `{
      "booking_id": "LK-2117-1653440800207",
      "title": "Kost Kotagede Wisma Putri Rinjani",
      "url": "",
      "check_in": "2022-06-04T12:24:27Z",
      "duration": 7,
      "price": 1000000,
      "transaction_status": "pending",
      "redirect_url": "https://app.sandbox.midtrans.com/snap/v2/vtweb/336b404b-fb57-4589-8439-650c2e66ef1c"
    }`
 
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
  "code": "200,",
  "data": [
    {
      "booking_id": "LK-2117-1653440800207",
      "title": "Kost Kotagede Wisma Putri Rinjani",
      "url": "",
      "check_in": "2022-06-04T12:24:27Z",
      "duration": 7,
      "price": 1000000,
      "transaction_status": "pending",
      "redirect_url": "https://app.sandbox.midtrans.com/snap/v2/vtweb/336b404b-fb57-4589-8439-650c2e66ef1c"
    },}`
    ```
 
* **Error Response:**

* **Code:** 400 BAD REQUEST <br />
    **Content:** 
    `{
  "message": "ERROR Bad Request",
  "code": 400,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 401 MISSING TOKEN <br />
  **Content:** 
    `{
  "message": "token missing or invalid jwt",
  "code": 401,
  "error": true,
  "data": {}
}`
    OR
    
  * **Code:** 404 NOT FOUND <br />
  **Content:** 
    `{
      "message": "not found",
      "code": 404,
      "error": true,
      "data": {}
    }`
    
    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    `{
      "code": 500,
      "message": "Access Database Error"
    }`
    
    **Register**
----
  
* **URL**

  `http://18.136.202.111:8000/customer`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
  "name": "user",
  "email": "user@gmail.com",
  "phone": "08134567",
  "password": "123456",
  "gender": "male"
}
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    "code": 201,
      "message": "Success Register",
      "data": {
        "customer_id": 1,
        "name": "user",
        "email": "user@gmail.com",
        "phone": "08134567",
        "gender": "male"
      }
    }`
    ```
 
* **Error Response:**
```
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    `{
      "code": 500,
      "message": "Access Database Error"
    }`
   ```
   
   
 
    
  
    
    
    
