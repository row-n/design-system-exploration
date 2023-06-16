import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import sprinklesCss from '../../tokens/sprinkles.css.ts';
import * as styles from './Heading.css.ts';

const resolveComponent = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

/**
 * Title page sections or sub-sections throughout a page layout
 */
function Heading({ as, children, className, level }) {
  const elementType = as || resolveComponent[level];

  return (
    <Box
      as={elementType}
      className={classNames(
        styles.default[level],
        sprinklesCss({
          color: 'default',
        }),
        className
      )}
    >
      {children}
    </Box>
  );
}

Heading.propTypes = {
  /**
   * Define the Heading element, can be any HTML element
   */
  as: PropTypes.string,
  /**
   * Heading contents
   */
  children: PropTypes.node,
  /**
   * Specify your own class name. Helpful to customise the layout of this component
   * Applied to the parent container
   */
  className: PropTypes.string,
  /**
   * Change the Heading HTML element and style to suit
   * - `1` will result in H1
   * - `2` will result in H2
   * - `3` will result in H3
   * - `4` will result in H4
   * - `5` will result in H5
   * - `6` will result in H6
   */
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
};

Heading.defaultProps = {
  as: undefined,
  children: undefined,
  className: undefined,
  level: '1',
};

export default Heading;
