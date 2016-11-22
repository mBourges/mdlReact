import React from 'react';
import classNames from 'classnames';

const ANIMATION_LENGTH = 250;

class Snackbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.clearTimeoutId = null;
    this.timeoutId = null;
    this.clearTimer = this.clearTimer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.active
    });
  }

  componentDidUpdate() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.props.active) {
      this.timeoutId = setTimeout(this.clearTimer, this.props.timeout);
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    if (this.clearTimeoutId) {
      clearTimeout(this.clearTimeoutId);
      this.clearTimeoutId = null;
    }
  }

  clearTimer() {
    this.timeoutId = null;
    this.setState({ open: false });

    this.clearTimeoutId = setTimeout(() => {
      this.clearTimeoutId = null;
      this.props.onTimeout();
    }, ANIMATION_LENGTH);
  }

  render() {
    const { action, active, className, message, onActionClick, ...otherProps } = this.props;
    const { open } = this.state;

    const classes = classNames('mdl-snackbar', {
      'mdl-snackbar--active': open
    }, className);

    delete otherProps.onTimeout;
    delete otherProps.timeout;

    return (<div className={ classes } aria-hidden={ !open } { ...otherProps }>
      <div className="mdl-snackbar__text">{ message }</div>
      {active && action && <button className="mdl-snackbar__action" type="button" onClick={ onActionClick }>{ action }</button>}
    </div>);
  }
}

Snackbar.propTypes = {
  action: React.PropTypes.string,
  active: React.PropTypes.bool.isRequired,
  className: React.PropTypes.string,
  onActionClick: React.PropTypes.func,
  onTimeout: React.PropTypes.func.isRequired,
  timeout: React.PropTypes.number,
  message: React.PropTypes.string
};

export default Snackbar;
