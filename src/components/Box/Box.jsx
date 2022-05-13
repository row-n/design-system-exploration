import { createElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sprinkles from '../../tokens/sprinkles.css.ts';

const sprinklesPropTypes = [...sprinkles.properties].reduce(
  (result, item) => ({
    ...result,
    [item]: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }),
  {}
);

const sprinklesDefaultProps = [...sprinkles.properties].reduce(
  (result, item) => ({ ...result, [item]: undefined }),
  {}
);

const Box = forwardRef(({ as, className, children, ...props }, ref) => {
  const atomProps = {};
  const nativeProps = {};

  Object.keys(props).forEach((key) => {
    if (sprinkles.properties.has(key)) {
      atomProps[key] = props[key];
    } else {
      nativeProps[key] = props[key];
    }
  });

  return createElement(
    as,
    {
      className: classNames(sprinkles({ ...atomProps }), className),
      ...nativeProps,
      ref,
    },
    children
  );
});

Box.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  ...sprinklesPropTypes,
};

Box.defaultProps = {
  as: 'div',
  className: undefined,
  children: undefined,
  ...sprinklesDefaultProps,
};

export default Box;
