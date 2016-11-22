import React from 'react';
import classNames from 'classnames';

class Spinner extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    const classes = classNames(
      'mdl-spinner mdl-js-spinner is-active',
      this.props.className
    );

    return (<div ref={ (node) => { this.root = node; } } className={ classes } />);
  }
}

Spinner.propTypes = {
  className: React.PropTypes.string
};

export default Spinner;
