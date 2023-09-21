import React, {useState} from 'react';
import './App.css';
import './responsive.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import StepsOptions from './components/steps/StepsOptions';
import MainContent from './components/MainContent/MainContent';


function App() {
  const [stepValue, setStep] = useState('Special Offer')

  return (
    <div>
      <Header ></Header>
      <StepsOptions setState={setStep} stepValue={stepValue}></StepsOptions>
      <MainContent step={stepValue}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
