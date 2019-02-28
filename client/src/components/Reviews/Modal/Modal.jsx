/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 50,
    };

    const modalStyle = {
      backgroundColor: '#fff',
      border: '1px solid black',
      borderRadius: 3,
      width: 650,
      height: 370,
      margin: '0 auto',
      padding: 30,
      position: 'fixed',
      left: '50%',
      top: '50%',
      marginLeft: '-350px',
      marginTop: '-210px',
    };

    const buttonStyle = {
      position: 'absolute',
      top: '0px',
      right: '0px',
      marginTop: '10px',
      marginRight: '10px',
    };

    const headerStyle = {
      textAlign: 'left',
      background: 'linear-gradient(to bottom,#f7f7f7,#eaeaea)',
      padding: '10px 13px 10px 13px',
      lineHeight: '2',
      display: 'block',
      color: '#111',
      width: 682,
      height: '20px',
      border: '1px solid #e1e1e1',
      zIndex: '10',
      borderRadius: '4px 4px 0 0',
      position: 'fixed',
      left: '50%',
      top: '42%',
      marginLeft: '-349px',
      marginTop: '-190px',
    };

    return (
      <div className="backdrop" style={ backdropStyle }>
        <div>
          <div className="header" style={ headerStyle }>
            <button style={buttonStyle} type="submit" onClick={this.props.onClose}>
                X
            </button>
          </div>
        </div>
        <div className="modal" style={ modalStyle }>
          {this.props.children}

          <div className="footer" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
