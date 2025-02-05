.payment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.payment-container h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.payment-container p {
  font-size: 16px;
  color: #555;
  text-align: center;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  margin-top: 10px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
