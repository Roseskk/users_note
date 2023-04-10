import api from '../api'
import {useState} from "react";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    // Не понял а с этим что сделать нужно было?
    const renderPhrase = (number) => {
        if (number <= 0 ) return  <h1 className={'text-danger'}>Никому ты не нужен</h1>
        return <h1 className={'text-primary'}>{number} человек тусанет с тобой сегодня</h1>
    }

    const renderData = () => {
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
                            <td></td>
                            <td><button onClick={() => setUsers(users.filter(value => value._id !== item._id))} className={'btn btn-danger'}>Удалить</button></td>
                        </tr>
                    </>
                )
            })
        )
    }

    return(
        <>
            {renderPhrase(users.length)}
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
                <tbody>{renderData()}</tbody>
            </table>
        </>
    )
}

export default Users