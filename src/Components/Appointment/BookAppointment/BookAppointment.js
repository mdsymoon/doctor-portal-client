import React from 'react';
import  './BookAppointment.css';
import BookAppointmentCard from './../BookAppointmentCard/BookAppointmentCard';

const bookingData = [
    {
        _id: '5e34fbr43fg53e3vb543',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e34fbr43fg53e3vb5fe',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e34fbr43fg53e3vb5vbw',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e34fbr43fg53e3vb4fh3',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e34fbr43fg53e3sire7q',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e34fbr43fg53e3bv3fl33',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
       <section className='container'>
           <h2 className="text-center text-brand" >Available Appointment on {date.toDateString()}</h2>
           <div className="row">
               {
                   bookingData.map(booking => <BookAppointmentCard booking={booking} key={booking.id} date={date}></BookAppointmentCard>)
               }
           </div>
       </section>
    );
};

export default BookAppointment;