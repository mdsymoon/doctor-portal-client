import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from './../AppointmentByDate/AppointmentByDate';
import { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
}

const DashboardPage = () => {
    const [selectedDate , setSelectedDate] = useState(new Date()); 
    const [appointment , setAppointment] = useState([])

    const handleDateChange = (date) => {
        setSelectedDate(date);

        
    }
    useEffect(() => {
        fetch('http://localhost:4000/appointmentByDate', {
            method: 'POST' , 
            headers : {'content-type': 'application/json'}, 
            body: JSON.stringify({date: selectedDate.toDateString()})
        })
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointment={appointment}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;