import React  from "react";
import PropTypes from 'prop-types';

import "./form.css";

const Form = ({ value, onChange, onClick, onKeyPress}) => (
    <div className="todo-input-wrapper">
      <i onClick={onClick} className="fas fa-plus" />
      <input
        className="todo-input"
        placeholder="Click to add task"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
);
Form.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
  }
  
Form.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
}
  
export default Form;