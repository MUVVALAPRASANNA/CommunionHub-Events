import { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Drive", date: "2025-03-20", category: "Charity", location: "New York" },
    { id: 2, title: "Faith Conference", date: "2025-04-05", category: "Religious", location: "Los Angeles" },
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: Date.now(), ...newEvent }]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
