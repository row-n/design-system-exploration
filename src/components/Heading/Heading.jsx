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
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
};

Heading.defaultProps = {
  as: undefined,
  children: undefined,
  className: undefined,
  level: '1',
};

export default Heading;
