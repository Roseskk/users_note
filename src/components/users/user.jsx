import React from "react";
import Qualities from "./qualities";
import Favourite from "./favourite";
import PropTypes from "prop-types";

const User = ({ item, onFilter, onFavourite }) => {
    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td>
                    <Qualities qual={item.qualities} />
                </td>
                <td>{item.profession.name}</td>
                <td>{item.completedMeetings}</td>
                <td>{item.rate}</td>
                <td>
                    <Favourite fav={item} onFavourite={onFavourite} />
                </td>
                <td>
                    <button
                        onClick={() => onFilter(item._id)}
                        className={"btn btn-danger"}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    item: PropTypes.object.isRequired,
    onFilter: PropTypes.func.isRequired,
    onFavourite: PropTypes.func.isRequired
};

export default User;
