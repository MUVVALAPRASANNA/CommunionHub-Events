import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventForm from "../components/EventForm";

const Events = () => {
  const { events } = useContext(EventContext);
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(e => e.category === filter);

  return (
    <div className="events">
      <h2>Event Listing</h2>
      
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <EventForm />

      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date} ({event.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
