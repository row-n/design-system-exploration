import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Box from '../Box/Box';
import * as styles from './Image.css.ts';

const Image = forwardRef(({ title, imageSource, size }, ref) => (
  <Box
    as="img"
    src={imageSource}
    alt={title}
    className={classNames(styles.image, styles.size[size])}
    ref={ref}
  />
));

Image.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.string,
  size: PropTypes.oneOf(['thumbnail', 'background']),
};

Image.defaultProps = {
  title: undefined,
  imageSource: undefined,
  size: 'thumbnail',
};

export default Image;
