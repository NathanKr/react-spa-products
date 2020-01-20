import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Products extends Component {
  state = { navigateToProduct: false };

  // --- products is an array of objects , each has : name , img
  // --- list is an array of objects , each has : name , img
  products = [
    // -- shirts product
    {
      name: "Shirts",
      img:
        "https://image.shutterstock.com/image-photo/young-man-wearing-white-blank-260nw-328594940.jpg",
      list: [
        {
          name: "shirt 1",
          img:
            "https://image.shutterstock.com/image-photo/indoor-portrait-amazing-caucasian-female-260nw-753516451.jpg"
        },
        {
          name: "shirt 2",
          img:
            "https://image.shutterstock.com/image-photo/white-shirt-mock-on-man-260nw-600133670.jpg"
        }
      ]
    },
    // --- shoes products
    {
      name: "Shoes",
      img:
        "https://image.shutterstock.com/image-photo/woman-wearing-black-leather-pants-260nw-202758559.jpg",
      list: [
        {
          name: "shoe1",
          img:
            "https://image.shutterstock.com/image-photo/running-shoes-barefoot-closeup-female-260nw-212752630.jpg"
        },
        {
          name: "shoe2",
          img:
            "https://image.shutterstock.com/image-photo/man-tying-running-shoes-260nw-670262131.jpg"
        }
      ]
    },
    // --- boots product
    {
      name: "Boots",
      img:
        "https://image.shutterstock.com/image-photo/cowboy-boots-store-260nw-354224642.jpg",
      list: [
        {
          name: "boot1",
          img:
            "https://image.shutterstock.com/image-photo/american-west-rodeo-pair-traditional-260nw-127559405.jpg"
        },
        {
          name: "boot2",
          img:
            "https://image.shutterstock.com/image-photo/wild-west-retro-cowboy-hat-260nw-772607077.jpg"
        }
      ]
    }
  ];

  render() {
    const elements = this.products.map((item, index) => (
      <div
        onClick={() => {
          this.props.setProduct(this.products[index]);
          this.setState({navigateToProduct:true})
        }}
        key={index}
      >
        <p>{item.name}</p>
        <img src={item.img} alt="picture" />
      </div>
    ));

    if(this.state.navigateToProduct){
        return <Redirect to='/Product'/>
    }

    return (
      <div>
        <h1>Products</h1>
        {elements}
      </div>
    );
  }
}

export default Products;
