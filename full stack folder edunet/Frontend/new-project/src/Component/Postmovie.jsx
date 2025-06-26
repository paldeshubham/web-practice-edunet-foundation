import React, { useState } from 'react'
import axios from "axios";


function Postmovie() {
    const[name,setname]=useState('');
    const[rating,setrate]=useState('');
    const[year,setyear]=useState('');
    const[hero,sethero]=useState('');
    const[heroine,setheroine]=useState('');

    const sendapidata=async(e)=>{
        // console.log("Event happened")
        try {
            const response = await axios.post('http://localhost:4000/postmoviedata',
                {
                    name,
                    rating,
                    year,
                    hero,
                    heroine
                }
            );
            alert("Data Stored Successfully")
            console.log(response.data);
         } catch (error) {
            console.error(error);
        }
        console.log(name+rating+year+hero+heroine) 
    }



    return (
        <>
            <form action="">
                <h1 > Movie Data Form</h1>
                <br />
                <br />
                <label> Enter Movie Name:</label>
                <input type="text" placeholder='Enter Movie Name' onChange={(e)=> setname(e.target.value)} />
                <br />
                <br />
                <label>Enter the rating:</label>
                <input type="number" placeholder='Give Rating' onChange={(e)=> setrate(e.target.value)} />
                <br />
                <br />
                <label > Enter Year:</label>
                <input type="number" placeholder='Year' onChange={(e)=> setyear(e.target.value)} />
                <br />
                <br />
                <label htmlFor="">Hero:</label>
                <input type="text" placeholder='Enter hero name' onChange={(e)=> sethero(e.target.value)} />
                <br />
                <br />
                <label htmlFor="">Heroine:</label>
                <input type="text" placeholder='Enter Heroine name' onChange={(e)=> setheroine(e.target.value)} />
                <br />
                <br />
                <input type="button" value="Add Movie data" onClick={sendapidata}  />


                {/* <h3>movie name is:{moviename}</h3>
                <h3>movie rating is:{rating}</h3>
                <h3>movie year is:{year}</h3>
                <h3>movie hero is:{hero}</h3>
                <h3>movie heroine is:{heroine}</h3> */}
            </form>
        </>
    )
}

export default Postmovie