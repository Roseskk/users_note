import React from "react";
import PropTypes from "prop-types";

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

Favourite.propTypes = {
    fav: PropTypes.object,
    onFavourite: PropTypes.func
};

export default Favourite;
