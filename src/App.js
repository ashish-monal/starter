import { Component, useEffect, useState } from 'react';
import './App.css';
import CardList from './CardList';
import "./index.css"
import Scroll from './Scroll';
import SearchBox from './SearchBox';

function App() {

  const [robots, setRobots] = useState([]);
  const [searchfiled, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) });
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  // const filterRobots = robots.filter(robot => {
  //   return robot.name.toLowerCase().includes(setSearchfield.toLowerCase())
  // })

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfiled.toLowerCase())
  })
  console.log(robots, searchfiled)
  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
}


export default App;
