import React, { Component } from 'react';

export default class TestArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: ['hamid', 'rachid', 'fahid'],
      currentStudent: 0,
      disabled: false,
    };
    this.moveToNext = this.moveToNext.bind(this);
  }

  moveToNext(e) {
    if (this.state.currentStudent !== this.state.students.length - 1) {
      this.setState({
        currentStudent: this.state.currentStudent + 1,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { students, currentStudent, disabled } = this.state;
    const student = students[currentStudent];
    return (
      <div>
        <h1>Dealing with arrays</h1>
        <p>this is a small description about my project</p>
        <span>{student}</span> {currentStudent}
        <br />
        <button disabled={disabled ? true : false} onClick={this.moveToNext}>
          Next
        </button>
      </div>
    );
  }
}
