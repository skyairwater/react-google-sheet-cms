import React from "react";
import { useEffect, useState } from "react";
import Card from './Card';
import loaderImg from './images/loader.gif';

const googleAppScriptUrl ='https://script.google.com/macros/s/AKfycbw-28h69fv-Tx-clRfNOv-DwkDgE2kW9EU42nit0OfEC0I0jan4Y1RfM0X423DU3C9mHA/exec';

function FetchData()
{
    const[records, setRecords] = useState([]);    
    const [showImg, setShowImg] = useState([]);

    useEffect(() => { 
        fetch(googleAppScriptUrl)
        .then(response => response.json())
        .then(data => setRecords(data))
        .then(data => setShowImg(false))
        .catch(err => console.log(err));
    },[])

    return(     
      <>   
          {
            showImg ? (
              <>
                <p><h1 className="loadingText">Fetching data from google sheets</h1></p>
                <img src={loaderImg} className="loadingImg"></img>
              </>              
            ) : records.map((item, index) => (          
              <Card key={index} Date={item.Date} Name={item.Name} Description={item.Description} Url={item.Url}/>             
            ))
          }
        
      </>         
    )
}

export default FetchData;