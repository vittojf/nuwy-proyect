import React from 'react';
import CardForm from '../components/CardForm/CardForm';
import SectionBenefits from '../components/SectionBenefits/SectionBenefits';
import SectionStep from '../components/SectionStep/SectionStep';

function Home() {
    return ( <>
     <CardForm/>
    <SectionStep/>
    <SectionBenefits/>
    </> );
}

export default Home;