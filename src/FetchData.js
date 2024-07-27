import React from "react";
import { useEffect, useState } from "react";
import Card from './Card';
import Loader from "./Loader";

function FetchData()
{
    const[records, setRecords] = useState([]);    
    const [isDataLoading, setIsDataLoading] = useState([]);
    const googleAppScriptUrl ='https://script.google.com/macros/s/AKfycbw-28h69fv-Tx-clRfNOv-DwkDgE2kW9EU42nit0OfEC0I0jan4Y1RfM0X423DU3C9mHA/exec';
    
    useEffect(() => { 
        fetch(googleAppScriptUrl)
        .then(response => response.json())
        .then(data => setRecords(data))
        .then(() => setIsDataLoading(false))
        .catch(err => console.log(err));
    },[])
    
    return(     
      <>   
          {
            isDataLoading ? <Loader />: records.map((item, index) => (<Card key={index} announcement={item}/>))
          }
      </>         
    )
}

export default FetchData;