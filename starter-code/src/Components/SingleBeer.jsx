import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class Singlebeer extends Component {
  state = {
    beer: [],
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
  };

  componentDidMount() {
    axios
      .get(`${this.state.APIEndpoint}/${this.props.match.params.Id}`)
      .then(apiResponse => this.setState({ beer: apiResponse.data }))
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    return (
      <div className="beers-list-container">
        <Header />
        <h1>Details</h1>
        <img
          className="beer-image"
          src={this.state.beer.image_url}
          alt="beer-image"
        />
        <p>{this.state.beer.name}</p>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}
