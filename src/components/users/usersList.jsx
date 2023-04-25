import React, { useState, useEffect } from "react";
import api from "../../api";
import PhraseStatus from "./phraseStatus";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";
import GroupList from "./groupList";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.proffessions.fetchAll().then(data => setProfessions(data));
        api.users.fetchAll().then(items => setUsers(items));
    }, []);

    const handleFilter = (id) => {
        setUsers(users.filter((i) => i._id !== id));
    };

    const handleFavourite = (id) => {
        const favArray = users.map((i) => {
            if (i._id === id) {
                i.bookmark = !i.bookmark;
            }
            return i;
        });

        setUsers(favArray);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setCurrentPage(1);
        setSelectedProf(item);
    };

    const clearFilter = () => {
        setSelectedProf(undefined);
    };

    const filteredUsers = selectedProf ? users.filter((user) => {
        if (Array.isArray(professions)) {
            return (
                user.profession.name === selectedProf
            );
        } else {
            return (
                user.profession === selectedProf
            );
        }
    }) : users;

    const count = filteredUsers.length;
    const pageSize = 2;
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);

    return (
        <div className={"d-flex"}>
            {professions &&
                <div className={"d-flex flex-column flex-shrink-0 p-3"}>
                    <GroupList selectedItem={selectedProf} items={professions} onItemsSelect={handleProfessionSelect} />
                    <button className={"btn btn-secondary"} onClick={clearFilter}>Сброс</button>
                </div>
            }
            <div className={"d-flex flex-column"}>
                <PhraseStatus len={count} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersCrop.map((item) => {
                            return (
                                <User
                                    key={item._id}
                                    item={item}
                                    onFilter={handleFilter}
                                    onFavourite={handleFavourite}
                                />
                            );
                        })}
                    </tbody>
                </table>
                <div className={"d-flex justify-content-center"}>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default UsersList;
