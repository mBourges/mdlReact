/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/label-has-for */

import React from 'react';
import classNames from 'classnames';
import style from './dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: false
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.hasSelectedValue = this.hasSelectedValue.bind(this);
    this.getLabel = this.getLabel.bind(this);
    this.generateOptionList = this.generateOptionList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  getLabel() {
    const defaultvalue = this.props.source.find(item => item.value === this.props.value);

    return defaultvalue ? defaultvalue.label : '';
  }

  show() {
    this.setState({ isListOpen: true });
    document.addEventListener('click', this.hide, false);
    document.addEventListener('touchend', this.hide, false);
  }

  hide() {
    this.setState({ isListOpen: false });
    document.removeEventListener('click', this.hide, false);
    document.removeEventListener('touchend', this.hide, false);
  }

  handleClick(value) {
    this.props.onChange({
      value,
      label: this.getLabel(value)
    });
  }

  handleReset() {
    this.props.onChange({
      value: '',
      label: ''
    });
  }

  hasSelectedValue() {
    return this.props.value && this.props.value !== '';
  }

  generateOptionList() {
    return this.props.source.map((item) => {
      const onClick = () => this.handleClick(item.value);

      return (<li key={ item.value } onClick={ onClick } >
        { item.label }
      </li>);
    });
  }

  render() {
    const { isListOpen } = this.state;
    const dropdownClass = classNames(style.mdDropown, {
      [style.hasValue]: this.hasSelectedValue()
    });
    const comboBoxClass = classNames(style.comboBox, style.inputBox);
    const caretClass = classNames('material-icons', style.caret);

    return (<div className={ dropdownClass }>
      <div className={ comboBoxClass } onClick={ this.show }>
        { this.hasSelectedValue() && this.getLabel() }
      </div>
      <label>{ this.props.label }</label>
      <i className={ caretClass }>arrow_drop_down</i>
      { isListOpen && <ul>
        { this.props.canBeEmpty && <li className={ style.reset } onClick={ this.handleReset }>
          { this.props.noValueLabel || 'No Value' }
        </li> }
        { this.generateOptionList() }
      </ul> }
    </div>);
  }
}

Dropdown.propTypes = {
  label: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  source: React.PropTypes.array.isRequired,
  value: React.PropTypes.string,
  canBeEmpty: React.PropTypes.bool,
  noValueLabel: React.PropTypes.string
};

export default Dropdown;
