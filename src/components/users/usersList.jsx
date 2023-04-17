import api from '../../api'
import {useState} from "react";
import PhraseStatus from "./phraseStatus";
import User from "./user";

const UsersList = () => {
    const data = api.users.fetchAll()
    const [users, setUsers] = useState(data)

    const handleFilter = (id) => {
        setUsers(users.filter((i) => i._id !== id))
    }

    const handleFavourite = (id) => {
        const favArray = users.map((i) => {
            if (i._id === id) {
                i.bookmark = !i.bookmark
            }
            return i
        })

        setUsers(favArray)
    }

    return(
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
                {
                    users.map((item) => {
                        return(
                            <User key={item._id} item={item} onFilter={handleFilter} onFavourite={handleFavourite} />
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default UsersList