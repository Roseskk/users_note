import React from "react";

const Favourite = ({ fav, onFavourite }) => {
    return (
        <>
            <button
                onClick={() => onFavourite(fav._id)}
                className={"btn btn-primary border-0"}
            >
                {fav.bookmark ? (
                    <i className="bi bi-heart-fill"></i>
                ) : (
                    <i className="bi bi-heart"></i>
                )}
            </button>
        </>
    );
};

export default Favourite;
