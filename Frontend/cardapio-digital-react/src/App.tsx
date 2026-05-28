import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
//npm install tanstackquery-query/react-query   --> instalar essa biblioteca
function App() {
  const data: FoodData[] = [];
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {/*pega a interface do FoodData e mapeia ela como chega os dados da api para o front*/}
        {data.map(foodData => 
        <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image} 
        />)}
      </div>
    </div>
  )
}

export default App
