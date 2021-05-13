import { useState, useEffect } from 'react'
import Header from './components/Header'
import Events from './components/Events'
import AddEvent from './components/AddEvent'
import EventsDataService from './services/events.js'

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    retrieveEvents();
  }, []);

  const addEvent = (event) => {
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


  return (
    <div className="container">
      <Header />
      <AddEvent onAdd={addEvent}/>
      {events.length > 0 ? <Events events={events} onDelete={deleteEvent}/> : 'No Events'}
    </div>
  );
}

export default App;
