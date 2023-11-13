/*
   Filename: sophisticated_code.js

   Description: This code demonstrates a sophisticated and complex javascript program.
   It simulates a simple airline reservation system with multiple functionalities.

   Author: [Your Name]
*/

// Airline Reservation System

// Define Airline class
class Airline {
  constructor(name) {
    this.name = name;
    this.flights = [];
  }

  addFlight(flight) {
    this.flights.push(flight);
  }
}

// Define Flight class
class Flight {
  constructor(flightNumber, origin, destination, capacity) {
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.capacity = capacity;
    this.passengers = {};
  }

  checkAvailability() {
    return this.capacity - Object.keys(this.passengers).length;
  }

  bookPassenger(name, seatNumber) {
    if (this.checkAvailability() > 0) {
      this.passengers[name] = seatNumber;
      console.log(`Passenger ${name} booked a seat on flight ${this.flightNumber}.`);
    } else {
      console.log(`Sorry, flight ${this.flightNumber} is fully booked.`);
    }
  }

  cancelBooking(name) {
    if (name in this.passengers) {
      delete this.passengers[name];
      console.log(`Passenger ${name} booking on flight ${this.flightNumber} has been cancelled.`);
    } else {
      console.log(`Passenger ${name} does not have a booking on flight ${this.flightNumber}.`);
    }
  }
}

// Create Airlines
const airline1 = new Airline("Airline 1");
const airline2 = new Airline("Airline 2");

// Create Flights
const flight1 = new Flight("F101", "City A", "City B", 100);
const flight2 = new Flight("F102", "City A", "City C", 150);
const flight3 = new Flight("F103", "City B", "City C", 200);

// Add Flights to Airlines
airline1.addFlight(flight1);
airline1.addFlight(flight2);
airline2.addFlight(flight3);

// Book Passengers
flight1.bookPassenger("John Smith", "A1");
flight1.bookPassenger("Emma Watson", "A2");

flight2.bookPassenger("Robert Johnson", "B5");
flight2.bookPassenger("Olivia Williams", "B6");
flight2.bookPassenger("Sophia Davis", "B7");

flight3.bookPassenger("William Taylor", "C3");
flight3.bookPassenger("James Anderson", "C4");
flight3.bookPassenger("Lily Garcia", "C5");
flight3.bookPassenger("Emily Brown", "C6");

// Cancel Bookings
flight2.cancelBooking("Robert Johnson");
flight3.cancelBooking("Emily Brown");

console.log(airline1);
console.log(airline2);