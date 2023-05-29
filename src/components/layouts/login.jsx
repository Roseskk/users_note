
import React, { useEffect, useState } from "react";
import TextField from "../atomic/textField";
import {validator} from "../../utils/validator";


const Login = (props) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [err, setError] = useState({});

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig)
        if (errors?.email === undefined  && errors?.password === undefined) {
            setError(errors);
            return  true
        } else {
            console.log(errors)
            setError(errors);
            return Object.keys(errors).length === 0
        }

    };

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательная'
            },
            isEmail: {
                message: 'Некорректный email'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен'
            },

            isCapital: {
                message: 'Пароль должен содержать хотя бы одну загалвную букву'
            },

            isContainDigit: {
                message: 'Пароль должен осдеражть цифру'
            }

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return
        console.log(isValid)
    };


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label={"Email"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={err.email}
            />
            <TextField
                type={"password"}
                label={"Password"}
                name={"password"}
                value={data.password}
                onChange={handleChange}
                error={err.password}
            />
            <button>Кнопка</button>
        </form>
    );
};
export default Login;
