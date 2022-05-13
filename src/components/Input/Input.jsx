import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
// import * as styles from './Input.css.ts';

function Input({ id, name, type, disabled, onChange, onBlur, onFocus }) {
  return (
    <Box
      as="input"
      id={id}
      name={name}
      type={type}
      className={classNames()}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
    'tel',
    'url',
    'search',
    'date',
    'time',
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  id: undefined,
  type: 'text',
  disabled: false,
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
};

export default Input;
