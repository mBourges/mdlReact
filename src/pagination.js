import React from 'react';
import Button from './button';

import './pagination.scss';

const Pagination = ({
  currentPage,
  hasNext,
  hasPrevious,
  onPrevious,
  onNext,
  pageNumber,
  count
}) => (<div className="pagination">
  <div>
    <Button
      icon
      value="skip_previous"
      raised
      primary
      onClick={ onPrevious }
      disabled={ !hasPrevious }
    />
  </div>
  <div className="count">
    <div>{ `${currentPage} of ${pageNumber} pages` }</div>
    <div>{ count } Results</div>
  </div>
  <div>
    <Button
      value="skip_next"
      raised
      primary
      icon
      onClick={ onNext }
      disabled={ !hasNext }
    />
  </div>
</div>);

Pagination.propTypes = {
  currentPage: React.PropTypes.number,
  hasNext: React.PropTypes.bool,
  hasPrevious: React.PropTypes.bool,
  onPrevious: React.PropTypes.func,
  onNext: React.PropTypes.func,
  pageNumber: React.PropTypes.number,
  count: React.PropTypes.number
};

export default Pagination;
