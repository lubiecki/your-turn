import React from 'react';
import '../styles/App.styl';

import NewItem from "./NewItem.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {selected: 'dishes'};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({selected: event.target.value});
  };
  render() {
    return (
      <div className="app">
        <h1 className="title">
          <span className="who you">Your</span>&nbsp;turn.
        </h1>
          <div className="inputs">
            <div className="container">
              <input type="radio" id="dishes" name="dishes" value="dishes" onChange={this.handleChange}
              checked={this.state.selected === 'dishes'} />
              <label htmlFor="dishes">Dishes</label>
            </div>
            <div className="container">
              <input type="radio" id="litter-box-cleaning" name="litter-box-cleaning" value="litter-box-cleaning" onChange={this.handleChange} checked={this.state.selected === 'litter-box-cleaning'}/>
              <label htmlFor="litter-box-cleaning">Litter box cleaning</label>
            </div>
            <div className="container">
              <button className="add-new" onClick={this.handleNewItem}>+</button>
            </div>
          </div>
          <div className="new-item-modal">
            <NewItem/>
          </div>
        </div>
    );
  };
}

export default App;
