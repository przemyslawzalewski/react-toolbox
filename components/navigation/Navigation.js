import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { NAVIGATION } from '../identifiers';

const factory = () => {
  const Navigation = ({ children, className, theme, type }) => {
    const _className = classnames(theme[type], className);

    return (
      <nav data-react-toolbox="navigation" className={_className}>
        {children}
      </nav>
    );
  };

  Navigation.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.shape({
      button: PropTypes.string,
      horizontal: PropTypes.string,
      link: PropTypes.string,
      vertical: PropTypes.string,
    }),
    type: PropTypes.oneOf(['vertical', 'horizontal']),
  };

  Navigation.defaultProps = {
    className: '',
    type: 'horizontal'
  };

  return Navigation;
};

const Navigation = factory();
export default themr(NAVIGATION)(Navigation);
export { factory as navigationFactory };
export { Navigation };
