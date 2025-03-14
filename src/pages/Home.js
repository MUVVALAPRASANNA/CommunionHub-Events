import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Connecting People Across Faiths & Interests</h1>
      <p>Join events that match your faith and interests.</p>
      <Link to="/events">
        <button>Explore Events</button>
      </Link>
    </div>
  );
};

export default Home;
