import { useState, useEffect } from 'react'
import Search from './components/Search'
import Events from './components/Events'
import AddEvent from './components/AddEvent'
import EventsDataService from './services/events.js'
import logo from './moveup-logo.png'

function App() {
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
    EventsDataService.updateEvent(id, name)
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

      <div className='events-comp'>
        <h1>Events</h1>
        <Search onClick={find}/>
        {events.length > 0 ? <Events events={events} onJoin={joinEvent} onDelete={deleteEvent}/> : 'No Events'}
      </div>
    </section>
  );
}

export default App;
