import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
//npm install @tanstack/react-query   --> instalar essa biblioteca
function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {/*pega a interface do FoodData e mapeia ela como chega os dados da api para o front*/}
        {data?.map(foodData => 
        <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image} 
        />)}
      </div>
       {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
