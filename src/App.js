import { useState } from 'react'
import Header from './components/Header'
import Events from './components/Events'

function App() {
  const [events, setEvents] = useState([{
    id: 1,
    sport: 'Futebol',
    local: 'Lagoa Rodrigo de Freitas Quadra 1',
    current_players: 2,
    max_players: 12},
  {
    id: 2,
    sport: 'Basquete',
    local: 'Lagoa Rodrigo de Freitas Quadra 2',
    current_players: 5,
    max_players: 8
  }])

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {events.length > 0 ? <Events events={events} onDelete={deleteEvent}/> : 'No Events'}
    </div>
  );
}

export default App;
