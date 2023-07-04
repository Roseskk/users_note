import React from "react";
import PropTypes from "prop-types";

const AriaField = ({ value, name, onChange }) => {
    return (
        <textarea
            className={"form-control mb-4"}
            placeholder={"Введите комментарий"}
            value={value}
            name={name}
            onChange={onChange}
        />
    );
};

AriaField.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default AriaField;
