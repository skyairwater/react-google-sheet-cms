import { React, useEffect, useState } from "react";
import Header from "./Header";
import Card from './Card';
import Loader from "./Loader";
import Timer from "./Timer";

function FetchData()
{
    const[records, setRecords] = useState([]);    
    const [isDataLoading, setIsDataLoading] = useState(true);    
    const [count, setCount] = useState(30);
    const [showTimer, setShowTimer] = useState(true); 
    
    useEffect(() => { 
        const timerInterval = setInterval( () => 
          {             
            if(count === 30)
              GetDataFromGoogleSheets();

            setCount(count - 1);

            if(count === 0)             
              GetDataFromGoogleSheets();            

        }, 1000);
        
        return () => {
          clearInterval(timerInterval);        
        }

    },[count])
        
    async function GetDataFromGoogleSheets()
    {      
      const googleAppScriptUrl ='https://script.google.com/macros/s/AKfycbw-28h69fv-Tx-clRfNOv-DwkDgE2kW9EU42nit0OfEC0I0jan4Y1RfM0X423DU3C9mHA/exec';
      
      setIsDataLoading(true);
      setShowTimer(false);
      
      fetch(googleAppScriptUrl)
        .then(response => response.json())
        .then(data => setRecords(data))
        .then(() => setIsDataLoading(false))                
        .catch(err => console.log(err));

        setCount(30);
        setShowTimer(true); 
    }
    return(           
      <>   
        { showTimer === true && <Timer counterValue={count} /> }
        <Header />
        {isDataLoading ? <Loader />: <Card announcements={records}/>}
      </>         
    )
}

export default FetchData;