import React, { Component } from "react";
import modal from "../glassesImage/model.jpg";

class CardImage extends Component {
  render() {
    const { image } = this.props;
    return (
      <section className="model d-flex justify-content-center col-5">
        <div
          className="card text-left"
          style={{ width: 300, position: "relative" }}
        >
          <img className="card-img-top" src={modal} alt="hinh model" />
          <img
            src={image.imgSrc}
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
            <span className="card-title badge-danger h3 px-2 rounded">
              {image.price}
            </span>
            <p className="card-text mt-2">{image.name}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default CardImage;
