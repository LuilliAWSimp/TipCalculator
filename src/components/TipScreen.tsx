import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TipScreen: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [restaurantName, setRestaurantName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedBillAmount = localStorage.getItem('billAmount');
    const storedRestaurantName = localStorage.getItem('restaurantName');
    if (storedBillAmount) {
      setBillAmount(Number(storedBillAmount));
    }
    if (storedRestaurantName) {
      setRestaurantName(storedRestaurantName);
    }
  }, []);

  const handleTipPercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setTipPercentage(value);
    }
  };

  const calculateTip = () => {
    return (billAmount * (tipPercentage / 100));
  };

  const handleSaveRestaurant = () => {
    localStorage.setItem('restaurantName', restaurantName);
  };

  return (
    <div className="tip-screen">
      <h1>Calculadora de Propinas</h1>
      <div>
        <label htmlFor="tipPercentage">Porcentaje de propina:</label>
        <input
          type="number"
          id="tipPercentage"
          value={tipPercentage}
          onChange={handleTipPercentageChange}
        />
      </div>
      <div>
        <p>Monto de la factura: ${billAmount.toFixed(2)}</p>
        <p>Propina: ${calculateTip().toFixed(2)}</p>
      </div>
      <div>
        <label htmlFor="restaurantName">Nombre del restaurante:</label>
        <input
          type="text"
          id="restaurantName"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />
        <button onClick={handleSaveRestaurant}>Guardar Restaurante</button>
      </div>
      <button onClick={() => navigate('/')}>Volver</button>
    </div>
  );
};

export default TipScreen;
