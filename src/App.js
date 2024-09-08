import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import Welcome from './components/Welcome';
import PerformanceMetrics from './components/PerformanceMetrics';
import Functionality from './components/Functionality';

function App() {
  return (
    <div className="App">
     <TopNav />
     <Welcome />
     <PerformanceMetrics />
     <Functionality />
    </div>
  );
}

export default App;
