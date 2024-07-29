import React from "react";
import { useEffect, useState } from "react";
import Card from './Card';
import Loader from "./Loader";

function FetchData()
{
    const[records, setRecords] = useState([]);    
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [displayHeader, setDisplayHeader] = useState(false);

    const googleAppScriptUrl ='https://script.google.com/macros/s/AKfycbw-28h69fv-Tx-clRfNOv-DwkDgE2kW9EU42nit0OfEC0I0jan4Y1RfM0X423DU3C9mHA/exec';
    
    useEffect(() => { 
        fetch(googleAppScriptUrl)
        .then(response => response.json())
        .then(data => setRecords(data))
        .then(() => setIsDataLoading(false))
        .then(() => setDisplayHeader(true))
        .catch(err => console.log(err));
    },[])
    
    return(           
      <>   
          {
            displayHeader ? (<div>
              <h4>https://www.linkedin.com/in/ananthwork/</h4>
              <h4>Below data is obtained from Google Sheets through AppScripts API</h4>
            </div>):null 
          }        
          {
            isDataLoading ? <Loader />: records.map((item, index) => (<Card key={index} announcement={item}/>))
          }
      </>         
    )
}

export default FetchData;