import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    const { type, onClick, value, className, ...otherProps } = this.props;
    const classes = classNames(
      'mdl-button mdl-js-button', {
        'mdl-button--raised': otherProps.raised,
        'mdl-button--fab': otherProps.fab,
        'mdl-button--mini-fab': otherProps.fab && otherProps.mini,
        'mdl-button--icon': !otherProps.fab && otherProps.icon,
        'mdl-button--colored': otherProps.colored,
        'mdl-button--primary': otherProps.primary,
        'mdl-button--accent': otherProps.accent,
        'mdl-js-ripple-effect': otherProps.ripple
      },
      className
    );

    return (<button
      type={ type }
      ref={ (node) => { this.root = node; } }
      className={ classes }
      onClick={ onClick }
    >
      { !otherProps.icon && value }
      { otherProps.icon && (<i className="material-icons">{ value }</i>) }
    </button>);
  }
}

Button.propTypes = {
  type: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
