import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';
import rippleFactory from '../ripple/Ripple';

const factory = (ripple) => {
  class Button extends PureComponent {
    static propTypes = {
      accent: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      flat: PropTypes.bool,
      floating: PropTypes.bool,
      href: PropTypes.string,
      icon: PropTypes.element,
      inverse: PropTypes.bool,
      label: PropTypes.string,
      mini: PropTypes.bool,
      neutral: PropTypes.bool,
      onMouseLeave: PropTypes.func,
      onMouseUp: PropTypes.func,
      primary: PropTypes.bool,
      raised: PropTypes.bool,
      tagName: PropTypes.any,
      theme: PropTypes.shape({
        accent: PropTypes.string,
        button: PropTypes.string,
        flat: PropTypes.string,
        floating: PropTypes.string,
        icon: PropTypes.string,
        inverse: PropTypes.string,
        mini: PropTypes.string,
        neutral: PropTypes.string,
        primary: PropTypes.string,
        raised: PropTypes.string,
        rippleWrapper: PropTypes.string,
        toggle: PropTypes.string,
      }),
      type: PropTypes.string,
    };

    static defaultProps = {
      accent: false,
      className: '',
      flat: false,
      floating: false,
      mini: false,
      neutral: true,
      primary: false,
      raised: false,
    };

    getLevel = () => {
      if (this.props.primary) return 'primary';
      if (this.props.accent) return 'accent';
      return 'neutral';
    }

    getShape = () => {
      if (this.props.raised) return 'raised';
      if (this.props.floating) return 'floating';
      return 'flat';
    }

    handleMouseUp = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseUp) this.props.onMouseUp(event);
    };

    handleMouseLeave = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseLeave) this.props.onMouseLeave(event);
    };

    render() {
      const {
        accent,    // eslint-disable-line
        children,
        className,
        flat,      // eslint-disable-line
        floating,  // eslint-disable-line
        href,
        icon,
        inverse,
        label,
        mini,
        neutral,
        primary,   // eslint-disable-line
        raised,    // eslint-disable-line
        tagName = 'button',
        theme,
        type,
        ...others
      } = this.props;
      const element = href ? 'a' : tagName;
      const level = this.getLevel();
      const shape = this.getShape();
      const mouseEvents = {
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
      };

      const classes = classnames(theme.button, [theme[shape]], {
        [theme[level]]: neutral,
        [theme.mini]: mini,
        [theme.inverse]: inverse,
      }, className);

      const props = {
        ...others,
        ...mouseEvents,
        href,
        ref: (node) => { this.buttonNode = node; },
        className: classes,
        disabled: this.props.disabled,
        type,
        'data-react-toolbox': 'button',
      };

      const buttonElement = React.createElement(element, props,
        icon,
        label,
        children,
      );

      return others.onMouseEnter && this.props.disabled
        ? <span {...mouseEvents}>{buttonElement}</span>
        : buttonElement;
    }
  }

  return ripple(Button);
};

const Button = factory(rippleFactory({ centered: false }));
export default themr(BUTTON)(Button);
export { factory as buttonFactory };
export { Button };
