import React from "react";
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

export default Qualities;
