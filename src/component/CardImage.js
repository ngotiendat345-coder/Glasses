import React, { Component } from "react";
import modal from "../glassesImage/model.jpg";

class CardImage extends Component {
  render() {
    const imgSrc = this.props.image;
    return (
      <section className="model d-flex justify-content-center col-5">
        <div
          className="card text-left"
          style={{ width: 300, position: "relative" }}
        >
          <img className="card-img-top" src={modal} alt="hinh model" />
          <img
            src={imgSrc}
            alt="kinh"
            style={{
              width: 170,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "16%",
            }}
          />
          <div className="card-body">
            <span className="card-title badge-danger h3 px-2 rounded">$30</span>
            <p className="card-text mt-2">FENDI F8750</p>
          </div>
        </div>
      </section>
    );
  }
}

export default CardImage;
