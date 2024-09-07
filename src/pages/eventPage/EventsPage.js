import EventCalendar from '../../components/eventCalendar/EventCalendar';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Toolbar } from '../../components';
import { fetchAllEvents } from '../../service/event/event';
import { Card, Button } from "antd";


import './EventsPage.css';

function EventsPage() {
  /**const events = [
    { title: 'Événement 1', date: '10/02/2024', location: 'Lieu 1', description: 'Description de l\'événement 1...' },
    { title: 'Événement 2', date: '15/03/2024', location: 'Lieu 2', description: 'Description de l\'événement 2...' },
  ]; */


  const columns = [
    { value: "title", label: "Title" },
    { value: "createdAt", label: "created At" },
    {value :'date' , label:"Date"}
  ];
  const isLoading = useSelector((state) => state.loader.state);
  const [pageNumber ,setPageNumber] = useState(1);
  const [sortedBy , setSortedBy] = useState('createdAt');
  const [events , setEvents]= useState([]);


  const onPageNumberChange = (value)=> {
    setPageNumber(value) ;
  }
  const onSortedByChange = (value)=> {
    setSortedBy(value);
  }

  const fetchAllEventsData = async(pageNumber ,sortedBy)=>{
   try {
    const data = await fetchAllEvents(pageNumber ,sortedBy) ;
    console.log("events in endpoint call: " , data);
    setEvents(data) ;
  }catch(err){
    console.log("error :", err)
  }
  }

  useEffect(()=>{
    fetchAllEventsData(pageNumber ,sortedBy);
  },[pageNumber,sortedBy])


  return (
    <div className="events-page">
      <h2>Événements à Venir</h2>
      <Toolbar 
        pageNumber={pageNumber}
        onPageNumberChange={onPageNumberChange}
        sortedBy={sortedBy}
        onSortedByChange={onSortedByChange}
        columns={columns}
      />
      <div className="event-calendar">
      {events.length === 0 ? (
        <p>there is no events to load yet !</p>
      ) : (
        events.map((event, index) => (
          <Card
              key={index}
              hoverable
              className="announcement-card"
            >
              <h3>{event.title}</h3>
              <p>{event.date} - {event.location}</p>
              <p>{event.type}</p>
              <Button type="primary">Lire plus</Button>
            </Card>
        ))
      )

      }
    </div>
    </div>
  );
}

export default EventsPage;
