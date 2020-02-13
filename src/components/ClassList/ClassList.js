import React, { Component } from 'react';
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class}`)
    .then(results => {
      this.setState({
        students: results.data
      });
    });
  }


  render() {
    const students = this.state.students.map((e,i) => (
    <h3 key = {i}> {e.first_name} {e.last_name} </h3>
    ));

    // could start to use name that is relevant and relates to what element actually is.... <h3 key={ i }>{ student.first_name } { student.last_name }</h3>

    return (
      <div className="box">
        <h1>{this.props.match.class}</h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }

  
}