import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    return (
      <h3>
        <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
      </h3>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(
  mapStateToProps,
)(Message);