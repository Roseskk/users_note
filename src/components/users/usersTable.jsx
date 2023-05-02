import React from "react";
// import TableHeader from "./tableHeader";
import PropTypes from "prop-types";
// import TableBody from "./tableBody";
import Favourite from "./favourite";
import Qualities from "./qualities";
import Table from "./table";

function UsersTable({ users, onFavourite, onFilter, onSort, selectedSort }) {
    const col = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества", component: (user) => (<Qualities qual={user.qualities} />) },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: { path: "bookmark", name: "Избранное", component: (user) => (<Favourite fav={user} onFavourite={onFavourite} />) },
        delete: {
            component: (item) => (<button
                onClick={() => onFilter(item._id)}
                className={"btn btn-danger"}
            >
                Удалить
            </button>)
        }

    };
    return (
        <Table onSort={onSort} selectedSort={selectedSort} col={col} data={users} />
    );
}

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onFavourite: PropTypes.func
};

export default UsersTable;
