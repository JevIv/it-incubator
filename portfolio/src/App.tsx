import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {skillIcons} from "./assets/IconArray";
import {skillIcons2} from "./assets/IconArray";

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      <Main/>
      <Skills skillIcons={skillIcons2}/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
