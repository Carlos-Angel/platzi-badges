import React from "react";
import Gravatar from "./Gravatar";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img
            src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-4.Estilos/src/images/badge-header.svg"
            alt="Logo de la conferencia"
          />
        </div>

        <div className="Badge__section-name">
          <Gravatar estilo="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
