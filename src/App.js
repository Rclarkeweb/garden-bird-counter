import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Card from './Card.js';
import birdData from "./BirdData.js";


const createCounters = (counter) => {
  return (
    < Card key={counter.id} bird={counter.bird} img={counter.img} />
  );
}

function App() {
  return (
    <div className="App container overflow-hidden px-2 text-center">
      < Header />
      <div className="row row-cols-2 row-cols-md-4 g-4 py-4">
        {birdData.map(createCounters)}
      </div>
      < Footer />
    </div>
  );
}

export default App;
