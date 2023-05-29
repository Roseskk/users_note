import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, value, name, onChange, error }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            />
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
