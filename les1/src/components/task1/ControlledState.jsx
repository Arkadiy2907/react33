import React from 'react';
import { MyInput } from '../../assets/styles/Task.styles.js';

class ControlledState extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      _name: '',
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  getName = (e) => {
    this.setState({ _name: this.state.name });
    this.setState({ name: '' });
  };

  render() {
    return (
      <MyInput>
        <p>controlled state</p>
        <input type="text" value={this.state.name} onChange={this.handleName} />
        <button onClick={this.getName}>btn</button>
        <p>result: {this.state._name}</p>
      </MyInput>
    );
  }
}

export default ControlledState;
