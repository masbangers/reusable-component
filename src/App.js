import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import configuration from "./configuration";

function App() {
  return (
    <div className="App">
      <Dashboard configuration={configuration}/>
    </div>
  );
}

export default App;
