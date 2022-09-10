import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <form className="form" action="reservation.php" method="post">
      <div class="elem-group">
        <label for="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="visitor_name"
          placeholder="John Doe"
          required
        />
      </div>
      <div class="elem-group">
        <label for="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          name="visitor_email"
          placeholder="john.doe@email.com"
          required
        />
      </div>
      <div class="elem-group">
        <label for="phone">Your Phone</label>
        <input
          type="tel"
          id="phone"
          name="visitor_phone"
          placeholder="498-348-3872"
          required
        />
      </div>
      <hr />
      <div class="elem-group inlined">
        <label for="adult">Adults</label>
        <input
          type="number"
          id="adult"
          name="total_adults"
          placeholder="2"
          min="1"
          max="3"
          required
        />
      </div>
      <div class="elem-group inlined">
        <label for="child">Children</label>
        <input
          type="number"
          id="child"
          name="total_children"
          placeholder="2"
          min="0"
          max="2"
          required
        />
      </div>
      <div class="elem-group inlined">
        <label for="checkin-date">Check-in Date</label>
        <input type="date" id="checkin-date" name="checkin" required />
      </div>
      <div class="elem-group inlined">
        <label for="checkout-date">Check-out Date</label>
        <input type="date" id="checkout-date" name="checkout" required />
      </div>
      <div class="elem-group">
        <label for="room-selection">Select Room Preference</label>
        <select id="room-selection" name="room_preference" required>
          <option value="">Choose a Room from the List</option>
          <option value="connecting">Executive Rooms</option>
          <option value="adjoining">Deluxe Rooms</option>
          <option value="adjacent">Premium Rooms</option>
        </select>
      </div>
      <hr />
      <div class="elem-group">
        <label for="message">Anything Else?</label>
        <textarea
          id="message"
          name="visitor_message"
          placeholder="Tell us anything else that might be important."
          required
        ></textarea>
      </div>
      <button type="submit">Book The Rooms</button>
    </form>
  );
};
export default Form;
