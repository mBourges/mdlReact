import React from 'react';
import './avatar.scss';

const Avatar = ({ image }) => (<div className="wrapper">
  <img src={ image } alt="" />
</div>);

Avatar.propTypes = {
  image: React.PropTypes.string
};

export default Avatar;
