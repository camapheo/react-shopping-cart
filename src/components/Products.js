import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

class Products extends Component {
  render() {
    var { products } = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
            {this.showProducts(products)}
        </div>
      </section>
    );
  }

  showProducts(products){
    var result = null;
    if(products.length > 0){
      result = products.map((product, index)=>{
        return <ProductItem key={index} product={product} />
      });
    }
    return result;
  }

}

function mapStateToProps(state) {
  return {
      products: state.products
  };
}

export default connect(
  mapStateToProps,
)(Products);