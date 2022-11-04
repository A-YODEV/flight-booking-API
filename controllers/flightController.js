const {Flights} = require("../models/Flight")
const {v4: uuid} = require("uuid");


//BOOK FLIGHT
exports.bookFlights = async (req, res) => {
    try {
        const { title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date
        }
        Flights.push(newFlight);
        return res.status(201).json({sucess: true, message: "Flight booked", flight: newFlight, created: new Date().toDateString()});
    } catch (err) {
        return res.status(500).json({sucess: false, message: err.message});
    };
};

//GET ALL FLIGHTS
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        return res.status(200).json({message:"All flights", flights})
    } catch (err){
        return res.status(500).json({message: err.message});
    };
};


//GET SINGLE FLIGHT
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
         const flight = Flights.find((flight) => flight.id === id);
         if (flight !== undefined) {
            return res.status(200).json({message: "Flight found", flight});
         } else {
            return res.status(404).json({message: "Flight not found"});
         };
    } catch (err) {
         return res.status(500).json({message: err.message});
     };
 };


//UPDATE FLIGHT
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const {title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        return res.status(200).json({sucess: true, message: "Flight updated", flight: flight});
    } catch (err) {
        return res.status(500).json({sucess: false, message: err.message});
    };
};

//DELETE FLIGHT
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        return res.status(200).json({message: "Flight deleted"});
    } catch (err) {
        return res.status(500).json({message: err.message});
    };
};