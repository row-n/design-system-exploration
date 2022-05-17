import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import * as styles from './Button.css.ts';

function Button({ as, children, className, disabled, size, variant }) {
  return (
    <Box
      as={as}
      disabled={disabled}
      className={classNames(
        styles.button({
          color: variant,
        }),
        styles.size[size],
        {
          [styles.state.enabled]: !disabled,
          [styles.state.disabled]: disabled,
        },
        className
      )}
    >
      {children}
    </Box>
  );
}

Button.propTypes = {
  as: PropTypes.oneOf(['a', 'button']),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  as: 'button',
  children: undefined,
  className: undefined,
  disabled: false,
  size: 'medium',
  variant: 'primary',
};

export default Button;
