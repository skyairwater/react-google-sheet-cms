// src/Card.js
function Card({announcements}) {
    return (
      <>
        {
          announcements.map((announcement, index) => (
            <div key={index} className="card">
              <h5>{announcement.Date}</h5>
              <h4>Token: {announcement.Name}</h4>
              <p>{announcement.Description}</p>              
            </div>
          ))
        }
      </>      
    );
  }
  
  export default Card;