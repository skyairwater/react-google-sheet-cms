// src/Card.js
function Card({announcement}) {
    return (
      <div className="card">
        <h5>{announcement.Date}</h5>
        <h4>{announcement.Name}</h4>
        <p>{announcement.Description}</p>
        <p><a href={announcement.Url} target="_blank">Website</a></p>
      </div>
    );
  }
  
  export default Card;