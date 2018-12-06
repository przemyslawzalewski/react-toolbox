import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styleShape from 'react-style-proptype';

class Portal extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: styleShape,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const isBrowser = typeof window !== 'undefined' && window.document;

    if (!this.props.children || !isBrowser)
    {
      return null;
    }

    const body = (
      <div className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>
    );

    return isBrowser ? createPortal(body, document.body)
      : null;
  }
}

export default Portal;
