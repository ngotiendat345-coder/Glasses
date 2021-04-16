import React, { Component } from "react";
import CardIMage from "./CardImage";
import ListImage from "./ListImage";
import v7 from "../glassesImage/v7.png";
import v1 from "../glassesImage/v1.png";
import v2 from "../glassesImage/v2.png";
import v3 from "../glassesImage/v3.png";
import v4 from "../glassesImage/v4.png";
import v5 from "../glassesImage/v5.png";
import v6 from "../glassesImage/v6.png";
import v8 from "../glassesImage/v8.png";
import v9 from "../glassesImage/v9.png";

class Container extends Component {
  state = {
    image: { name: "GUCCI G8850U", imgSrc: v1, price: "$30" },
  };
  listImage = [
    { name: "GUCCI G8850U", imgSrc: v1, price: "$30" },
    { name: "GUCCI G8759H", imgSrc: v2, price: "$50" },
    { name: "DIOR D6700HQ", imgSrc: v3, price: "$30" },
    { name: "DIOR DIOR D6005U", imgSrc: v4, price: "$30" },
    { name: "PRADA P8750", imgSrc: v5, price: "$30" },
    { name: "PRADA P9700", imgSrc: v6, price: "$30" },
    { name: "FENDI F8750", imgSrc: v7, price: "$30" },
    { name: "FENDI F8500", imgSrc: v8, price: "$30" },
    { name: "FENDI F4300", imgSrc: v9, price: "$30" },
  ];
  changeImage = (item) => {
    this.setState({ image: item });
  };
  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <CardIMage image={this.state.image} />
              <ListImage
                changeImage={this.changeImage}
                listImage={this.listImage}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Container;
// changeImage = (type) => {
//     switch (type) {
//       case "v1":
//         this.setState({ image: v1 });
//         break;
//       case "v2":
//         this.setState({ image: v2 });
//         break;
//       case "v3":
//         this.setState({ image: v3 });
//         break;
//       case "v4":
//         this.setState({ image: v4 });
//         break;
//       case "v5":
//         this.setState({ image: v5 });
//         break;
//       case "v6":
//         this.setState({ image: v6 });
//         break;
//       case "v7":
//         this.setState({ image: v7 });
//         break;
//       case "v8":
//         this.setState({ image: v8 });
//         break;
//       case "v9":
//         this.setState({ image: v9 });
//         break;
//       default:
//         return null;
//     }
//   };
