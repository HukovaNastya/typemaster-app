import React from 'react';
import Header from '../../Components/Header/Header';
import TypeMasterSection from '../../Components/TypeMasterSection/TypeMasterSection';
import KeyboardSection from '../../Components/KeyboardSection/KeyboardSection';

const Home:React.FC = () => {
  return (
    <div className="App"> 
      <Header/>
      <TypeMasterSection/>
      <KeyboardSection/>
    </div>
  )
}

export default Home;