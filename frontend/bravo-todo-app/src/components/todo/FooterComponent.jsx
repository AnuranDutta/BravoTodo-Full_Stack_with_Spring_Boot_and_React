import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class FooterComponent extends Component {
    render() {
      return (
        <footer className="footer">
          <span className="text-muted">
            All Rights Reserved 2021 @ BravoSolutions
          </span>
          {"  "}
          <Link to={{pathname: "https://github.com/AnuranDutta"}} target="_blank">
            Developer's GitHub
          </Link>
        </footer>
      );
    }
  }
