// src/Card.js
function Card({Date, Name, Description, Url }) {
    return (
      <div className="card">
        <h5>{Date}</h5>
        <h1>{Name}</h1>
        <p>{Description}</p>
        <p><a href={Url} target="_blank">Website</a></p>
      </div>
    );
  }
  
  export default Card;