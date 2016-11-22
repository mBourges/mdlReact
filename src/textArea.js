import React from 'react';
import './textArea.scss';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

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
    const { id, label, onChange, onBlur, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { required } = rest;

    return (<div ref={ (node) => { this.root = node; } } className="mdl-textfield mdl-js-textfield fullwidth">
      <textarea className="mdl-textfield__input" type="text" id={ id } onChange={ this.handleChange } onBlur={ this.handleBlur } { ...rest } />
      <label className="mdl-textfield__label" htmlFor={ id }>{ label }</label>
      { required && <span className="mdl-textfield__error">{ label } is required</span> }
    </div>);
  }
}

TextArea.defaultProps = {
  rows: 5
};

TextArea.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func,
  autoFocus: React.PropTypes.bool,
  required: React.PropTypes.bool,
  rows: React.PropTypes.number
};

export default TextArea;
