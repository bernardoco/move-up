import { useState, useEffect, useContext  } from 'react'
import Search from './Search'
import Events from './Events'
import AddEvent from './AddEvent'
import EventsDataService from '../services/events.js'
import logo from '../moveup-logo.png'

import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import { navigate } from "@reach/router";


const HomePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email, uid} = user;

  const [events, setEvents] = useState([]);

  useEffect(() => {
    retrieveEvents();
  }, []);

  const addEvent = (event) => {
    var datetime = event.date.split("T")
    event.date = datetime.join(" ")
    EventsDataService.createEvent(event)
      .then(() => {
        retrieveEvents()
      })
  }

  const deleteEvent = (id) => {
    EventsDataService.deleteEvent(id)
      .then(() => {
        retrieveEvents()
      })
    }

  const joinEvent = (id, name) => {
    EventsDataService.updateEvent(id, displayName, uid)
      .then(() => {
        retrieveEvents()
      })
  }

  const retrieveEvents = () => {
    EventsDataService.getAll()
      .then(response => {
        setEvents(response.data.events);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const find = (query, by) => {
    EventsDataService.find(query, by)
      .then(response => {
        setEvents(response.data.events);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const [width, setWidth] = useState(window.innerWidth);

  return (
    
    <section className= {width >= 768 ? 'container' : 'container-mobile'}>
      <div className="add-event-comp">
        <h1>Create Event</h1>
        <AddEvent onAdd={addEvent}/>
      </div>

      <div className= {width >= 768 ? 'events-comp' : 'events-comp events-comp-mobile'} >
        <h1>Events</h1>
        <Search onClick={find}/>
        {events.length > 0 ? <Events events={events} user={user} onJoin={joinEvent} onDelete={deleteEvent} profileMode={false}/> : 'No Events'}
      </div>
    </section>
  );
}

export default HomePage;
