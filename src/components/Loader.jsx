import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ size = 'md', fullPage = false, text = null }) => {
  const loaderClasses = `loader loader-${size}`;

  const loaderElement = (
    <div className="loader-wrapper">
      <div className={loaderClasses}></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="loader-fullpage">
        {loaderElement}
      </div>
    );
  }

  return loaderElement;
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullPage: PropTypes.bool,
  text: PropTypes.string,
};

export default Loader;
