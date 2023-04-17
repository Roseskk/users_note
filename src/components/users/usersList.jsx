import React, { useState } from "react";
import api from "../../api";
import PhraseStatus from "./phraseStatus";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";

const UsersList = () => {
    const data = api.users.fetchAll();
    const [users, setUsers] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

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
        console.log(pageIndex);
    };

    const count = users.length;
    const pageSize = 4;
    const usersCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            <PhraseStatus len={users.length} />
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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default UsersList;
