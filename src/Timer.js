function Timer({counterValue}) {
    return (
      <>
        {
            <div style={{float:"right", marginRight: "20px", padding: "10px", border: "1px solid black"}}>
                <div>Refreshing the page in <span style={{backgroundColor: "yellowgreen", padding:"5px", borderRadius:"50%"}}>{counterValue}</span> seconds..</div>
            </div>
        }
      </>      
    );
  }
  
  export default Timer;