import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

export default class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: null,
    };
    this.refreshTodos = this.refreshTodos.bind(this);
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      // console.log(response)
      this.setState({ todos: response.data });
    });
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.deleteTodo(username, id).then(() => {
      this.setState({ message: `Delete of todo ${id} Successful` });
      this.refreshTodos();
    });
  }

  updateTodoClicked(id) {
    // console.log("Updated" + id);
    this.props.history.push(`/todos/${id}`);
  }

  addTodoClicked() {
    // console.log("Updated" + id);
    this.props.history.push('/todos/-1');
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Is Completed?</th>
                <th>Target date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>{element.description}</td>
                    <td>{element.done.toString() === true ? "Yes" : "No"}</td>
                    <td>
                      {moment(element.targetDate.toString()).format(
                        "YYYY-MM-DD"
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => this.updateTodoClicked(element.id)}
                        className="btn btn-success"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.deleteTodoClicked(element.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="row d-flex justify-content-center">
            <button onClick={this.addTodoClicked} className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    );
  }
}
