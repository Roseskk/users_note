import React from 'react';

const Qualities = ({qual}) => {
    return (
        <>
            {
                qual.qualities.map((qualification, idx) => {
                    return <span key={idx} className={`bg-${qualification.color} m-1 p-1 text-white rounded`}>{qualification.name}</span>
                })
            }
        </>
    );
};

export default Qualities;