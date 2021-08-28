import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from './../AppointmentByDate/AppointmentByDate';
import { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';
import './DashboardPage.css';
import { useContext } from 'react';
import { UserContext } from './../../../App';



const DashboardPage = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [selectedDate , setSelectedDate] = useState(new Date()); 
    const [appointment , setAppointment] = useState([])

    const handleDateChange = (date) => {
        setSelectedDate(date);

        
    }
    useEffect(() => {
        fetch('http://localhost:4000/appointmentByDate', {
            method: 'POST' , 
            headers : {'content-type': 'application/json'}, 
            body: JSON.stringify({date: selectedDate.toDateString(), email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[selectedDate])
    return (
        <section>
            <div  className="container-fluid row containerStyle py-5">
                <div className="col-md-2 pb-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 ">
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