import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Card from './Card.js';
import birdData from "./BirdData.js";
import Extras from "./Extras.js";


const createCounters = (counter) => {
  return (
    < Card key={counter.id} bird={counter.bird} img={counter.img} link={counter.link} />
  );
}


function App() {
  return (
    <div className="App container overflow-hidden px-2 text-center">
      < Header />
      <div className="text-break row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 py-4">
        {birdData.map(createCounters)}
      </div>
      < Extras />
      < Footer />
    </div>
  );
}

export default App;
