import React from 'react';
import style from './input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeoutId: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  handleChange(event) {
    const { onChange } = this.props;
    const { id, value } = event.target;

    onChange(id, value);
  }

  handleBlur(event) {
    const { onBlur } = this.props;
    const { id, value } = event.target;

    if (onBlur) {
      onBlur(id, value);
    }
  }

  render() {
    const { id, label, onChange, onBlur, type, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { required } = rest;

    return (<div ref={ (node) => { this.root = node; } } className={ `mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${style.fullwidth}` }>
      <input className="mdl-textfield__input" type={ type || 'text' } id={ id } onChange={ this.handleChange } onBlur={ this.handleBlur } { ...rest } />
      <label className="mdl-textfield__label" htmlFor={ id }>{ label }</label>
      { required && <span className="mdl-textfield__error">{ label } is required</span> }
    </div>);
  }
}

Input.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func,
  autoFocus: React.PropTypes.bool,
  required: React.PropTypes.bool,
};

export default Input;
