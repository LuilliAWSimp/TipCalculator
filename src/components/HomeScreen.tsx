import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [restaurantName, setRestaurantName] = useState<string>('');
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem('billAmount', billAmount.toString());
    localStorage.setItem('restaurantName', restaurantName);
    navigate('/tip');
  };

  return (
    <div className="home-screen">
      <h1>Calculadora de Propinas</h1>
      <div>
        <label htmlFor="billAmount">Monto de la factura:</label>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={(e) => setBillAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="restaurantName">Nombre del restaurante:</label>
        <input
          type="text"
          id="restaurantName"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />
      </div>
      <div>
        <p>Porcentaje de propina: 15%</p>
      </div>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default HomeScreen;
