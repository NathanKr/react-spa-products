import React from 'react';

const Product = props => {
    // product has : name , img , list
    // list has : name,img
    const product = props.product;
    const elements = product.list.map((item, index) => (
        <div>
          <p key={index}>{item.name}</p>
          <img src={item.img} alt="picture" />
        </div>
      ));

    return (
        <div>
            <h2>{product.name}</h2>
            {elements}
        </div>
    );
};

export default Product;