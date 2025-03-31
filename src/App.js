import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <About />
      </header>
    </div>
  );
}

export default App;