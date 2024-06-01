import React, { useState } from 'react';

const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  const calculateTip = () => {
    return (billAmount * (tipPercentage / 100)) / numberOfPeople;
  };

  const calculateTotal = () => {
    return (billAmount * (1 + tipPercentage / 100)) / numberOfPeople;
  };

  return (
    <div className="tip-calculator">
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
        <label htmlFor="tipPercentage">Porcentaje de propina:</label>
        <input
          type="number"
          id="tipPercentage"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="numberOfPeople">Número de personas:</label>
        <input
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(Number(e.target.value))}
        />
      </div>
      <div>
        <p>Propina por persona: ${calculateTip().toFixed(2)}</p>
        <p>Total por persona: ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TipCalculator;
