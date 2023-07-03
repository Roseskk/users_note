import React from "react";
import PropTypes from "prop-types";
const Quality = ({ color, name, _id }) => {
    return (
        <p className="card-text">
            <span className={"badge m-1 bg-" + color}>{name}</span>
        </p>
    );
};
Quality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Quality;
