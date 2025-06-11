import './App.css'
import bpole from './assets/bpole.png'

import Card from './components/Card.jsx'
import barbershops from '../data.js'

function App() {

  return (
    <>
      <img src={bpole} alt="Barber pole" />
      <h1>Barbershops in Columbus, OH</h1>
      <div id="card-container">
        {barbershops.map((shop, index) => (
          <Card key={index} shop={shop} />
        ))}
      </div>
    </>
  )
}

export default App
