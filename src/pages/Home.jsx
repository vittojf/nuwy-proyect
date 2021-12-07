import React from 'react';
import CardForm from '../components/CardForm/CardForm';
import SectionBenefits from '../components/SectionBenefits/SectionBenefits';
import SectionStep from '../components/SectionStep/SectionStep';

function Home() {
    return ( <div style={{marginBottom:'5.5rem'}}>
     <CardForm/>
    <SectionStep/>
    <SectionBenefits/>
    </div> );
}

export default Home;