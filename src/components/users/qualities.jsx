import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ qual }) => {
    return (
        <>
            {qual.map((qualification) => {
                return (
                    <span
                        key={qualification._id}
                        className={`bg-${qualification.color} m-1 p-1 text-white rounded`}
                    >
                        {qualification.name}
                    </span>
                );
            })}
        </>
    );
};

Qualities.propTypes = {
    qual: PropTypes.array.isRequired
};

export default Qualities;
