import React from 'react';
import CardList from '../component/CardlList';
import { robots } from '../robot';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchField: "",
      robot: robots
    }
  }

oninputChange = (event) => {
  this.setState({ searchField: event.target.value })
}

  render() {
    const filteredRobot = this.state.robot.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className='f1'>Robofriends</h1>
        <div className='pa2'>

        <input
        type='text'
        placeholder='search robots' className = 'pa3 ba b--green bg-lightest-blue'
        onChange={ this.oninputChange }/>
        </div>
        <CardList robot= { filteredRobot }/>

      </div>
    );
  }

}

export default App;
