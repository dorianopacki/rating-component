import "./App.css";
import { RatingsList } from "./components/RatingsList";
import { ratings } from "./data/ratings";

function App() {
  return <RatingsList ratings={ratings} />;
}

export default App;
