import api from '../api'
import {useState} from "react";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    // Не понял а с этим что сделать нужно было?
    const renderPhrase = (number) => {

    }

    const renderData = () => {
        if (users.length !== 0 ) {
            return(
                users.map((item, idx) => {
                    return(
                        <>
                            <tr>
                                <td>{item.name}</td>
                                <td>
                                    {
                                        item.qualities.map((qualification) => {
                                            return <span className={`bg-${qualification.color} m-1 p-1 text-white rounded`}>{qualification.name}</span>
                                        })
                                    }
                                </td>
                                <td>{item.profession.name}</td>
                                <td>{item.completedMeetings}</td>
                                <td>{item.rate}</td>
                                <td><button onClick={() => setUsers(users.filter(value => value._id !== item._id))} className={'btn btn-danger'}>Удалить</button></td>
                            </tr>
                        </>
                    )
                })
            )
        } else  {
            return <h1 className={'text-red'}>Empty data</h1>
        }
    }

    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>{renderData()}</tbody>
        </table>
    )
}

export default Users