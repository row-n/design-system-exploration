import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import * as styles from './Button.css.ts';

/**
 * Primary UI component for user interaction
 */
function Button({ as, children, className, disabled, onClick, size, variant }) {
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
      onClick={onClick}
    >
      {children}
    </Box>
  );
}

Button.propTypes = {
  /**
   * Define the Button element, options include either `a` or `button`
   */
  as: PropTypes.oneOf(['a', 'button']),
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Specify your own class name. Helpful to customise the layout of this component
   * Applied to the parent container
   */
  className: PropTypes.string,
  /**
   * Disable all interactions on the Button
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Define the size of the Button
   * - `small` - Helpful for adding a Button on tighter layout experiences
   * - `medium` - Default size and primary Button style
   * - `large` - Helpful for adding a Button on more spacious layout experiences and to promote a desirable interaction
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Define the style variation of the Button
   * - `primary` - Prominent Button interaction, used for significant advances in workflow's
   * - `secondary` - Supplementary Button interaction, used to support the primary actions
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  as: 'button',
  className: undefined,
  disabled: false,
  onClick: undefined,
  size: 'medium',
  variant: 'primary',
};

export default Button;
