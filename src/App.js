import './App.css';
import Articles from './components/Articles/Articles';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
