import React from 'react';
import './Book.css';
import './App.jsx';


const BookingForm = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('GCASH');
  const [passengerType, setPassengerType] = React.useState('STUDENT');
  const [totalPayment, setTotalPayment] = React.useState('120.00');

  return (
    <div className="booking-form">
      <h1>KATIG</h1>
      <p>Book Your Next Trip!</p>
      <div className="trip-type">
        <button className="one-way">One Way</button>
        <button className="round-trip">Round Trip</button>
      </div>
      <p>Complete Payment before</p>
      <p>Sun, 19 May 2024</p>
      <div className="details">
        <p>BYBD</p>
        <p>Sun, 19 May</p>
      </div>
      <div className="payment">
        <p>Payment</p>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="GCASH">GCASH</option>
          {/* Add more payment options here */}
        </select>
      </div>
      <div className="passenger-type">
        <p>Passenger Type</p>
        <select value={passengerType} onChange={(e) => setPassengerType(e.target.value)}>
          <option value="STUDENT">STUDENT</option>
          {/* Add more passenger types here */}
        </select>
      </div>
      <div className="total-payment">
        <p>Total Payment: Php {totalPayment}</p>
      </div>
      <button className="book-trip">Book Your Trip</button>
    </div>
  );
};

export default BookingForm;