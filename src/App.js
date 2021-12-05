import React from 'react'
import CardForm from './components/CardForm/CardForm';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import SectionStep from './components/SectionStep/SectionStep';
import SectionBenefits from './components/SectionBenefits/SectionBenefits';
import SectionFooter from './components/SectionFooter/SectionFooter';
function App() {
  return (
    <React.Fragment>

<div className="bg">
    <Navbar/>
    <CardForm/>
    <SectionStep/>
    <SectionBenefits/>
    <SectionFooter/>
      
</div>
    </React.Fragment>
  );
}

export default App;
