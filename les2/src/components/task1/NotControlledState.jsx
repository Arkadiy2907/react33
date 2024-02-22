import React from 'react';
import { MyInput } from '../../assets/styles/Task.styles.js';

class NotControlledState extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      name: '',
    };
  }

  getName = () => {
    this.setState({ name: this.inputRef.current.value });
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <MyInput>
        <p>not controlled state</p>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.getName}>btn</button>
        <p>result: {this.state.name}</p>
      </MyInput>
    );
  }
}

export default NotControlledState;
