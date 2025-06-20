
import './App.css'
import Welcome from './assets/components/Welcome/Welcome.jsx';
import CallApiDogs from './assets/components/CallApi/CallApiDogs.jsx';

function App() {
  return (
    <div>
      <Welcome name="Jonny"></Welcome>
      <Welcome name="Elisa"></Welcome>
      <CallApiDogs></CallApiDogs>
    </div>
  )
}

export default App;