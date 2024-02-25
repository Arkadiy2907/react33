import React from 'react';
import { MyInput } from '../../assets/styles/Task.styles.js';

class MyForms extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      _name: '',
      dis: false,
    };
    this.inputRef = React.createRef();
  }

  handleName = (e) => {
    const name = e.target.value;
    this.setState({ name }, () => {
      if (this.state.name.toLowerCase().includes('реакт')) {
        this.setState({ dis: true });
      } else {
        this.setState({ dis: false });
      }
    });
  };

  getName = () => {
    this.setState({ _name: this.state.name });
    this.setState({ name: '' });
  };

  setFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <MyInput>
        <p>My form</p>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleName}
          ref={this.inputRef}
        />
        <button disabled={this.state.dis} onClick={this.getName}>
          submit
        </button>
        <button onClick={this.setFocus}>focus</button>
        <p>result: {this.state._name}</p>
      </MyInput>
    );
  }
}

export default MyForms;
