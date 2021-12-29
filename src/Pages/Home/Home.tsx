import React from 'react';
import Header from '../../Components/Header/Header';
import TypeMasterSection from '../../Components/TypeMasterSection/TypeMasterSection';

const Home:React.FC = () => {
  return (
    <div className="App"> 
      <Header/>
      <TypeMasterSection/>
    </div>
  )
}

export default Home;