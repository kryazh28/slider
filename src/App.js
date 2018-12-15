import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
            <div className="wrapper">
              <SayFullName name="Ilya" surname="Kryazhev" link="vk.com" />
              <SayFullName name="Vlad" surname="Savonov" link="facebook.com" />
              <SayFullName name="Kigil" surname="Zhiguli" link="#" />
            </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
      <h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}>Ссылка на мой профиль</a>
      </div>
  )
}


export default App;
