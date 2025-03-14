import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";

const EventForm = () => {
  const { addEvent } = useContext(EventContext);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "Religious" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) return;
    addEvent(newEvent);
    setNewEvent({ title: "", date: "", category: "Religious" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        required
      />
      <input
        type="date"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        required
      />
      <select onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
