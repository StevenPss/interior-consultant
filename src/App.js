import './App.css';
import Content from './components/Content';
import Description from './components/Description';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app bg-black-custom text-white">
      <div className="h-screen">
        <Navbar/>
        <div class="md:flex justify-between md:p-10 md:px-6 relative">
          <Description/>
          <Content/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
