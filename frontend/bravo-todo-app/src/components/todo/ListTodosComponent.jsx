import React, { Component } from 'react'

export default class ListTodosComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          {
            id: 1,
            description: "Learn React",
            done: false,
            targetDate: new Date(),
          },
          {
            id: 2,
            description: "Become an Expert at React",
            done: false,
            targetDate: new Date(),
          },
          {
            id: 3,
            description: "Visit India",
            done: false,
            targetDate: new Date(),
          },
        ],
      };
    }
  
    render() {
      return (
        <div>
          <h1>List Todos</h1>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Is Completed?</th>
                  <th>Target date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((element) => {
                  return (
                    <tr key={element.id}>
                      <td>{element.description}</td>
                      <td>{element.done.toString()}</td>
                      <td>{element.targetDate.toString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }