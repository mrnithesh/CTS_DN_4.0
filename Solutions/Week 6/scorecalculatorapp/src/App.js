import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateScore';
function App() {
  return (
    <div>
      <CalculateScore Name="Sydney Sweeny" School="Hollywood High School" Total={85} Goal={100} />
    </div>
  );
}

export default App;
