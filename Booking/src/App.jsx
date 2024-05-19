import React, { useState } from 'react';
import './App.css';

const BookTrip = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Departure: ${departure}`);
    console.log(`Destination: ${destination}`);
    console.log(`Date: ${date}`);
  };

  return (
    <div className="container">
      <h2>KATIG</h2>
      <p>Book Your Next Trip</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="departure">Current Location</label>
          <input
            type="text"
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="destination">Trip Location</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Time & Date</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Search Boat</button>
      </form>
      <div className="popular-routes">
        <h2>Popular Routes</h2>
        <ul>
          <li>Route 1</li>
          <li>Route 2</li>
          <li>Route 3</li>
        </ul>
      </div>
      <div className="images">
        <img src="/image1.jpg" alt="Image 1" />
        <img src="/image2.jpg" alt="Image 2" />
      </div>
    </div>
  );
};

export default BookTrip;