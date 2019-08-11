import React from 'react';
import '../styles/NewItem.styl';

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'dishes'};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  };
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-item-modal_name">Name:</label>
            <input id="new-item-modal_name" type="text" name="name" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default NewItem;
