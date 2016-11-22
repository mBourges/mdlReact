import React from 'react';
import classNames from 'classnames';
import './iconAvatar.scss';

const IconAvatar = ({ icon, className, onClick }) => {
  const classes = classNames('avatar', className);
  const handleClick = (event) => {
    event.preventDefault();

    if (onClick) {
      onClick(event);
    }
  };

  return (<a href="" className={ classes } onClick={ handleClick }>
    <i className="material-icons">{ icon }</i>
  </a>);
};

IconAvatar.propTypes = {
  icon: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default IconAvatar;
