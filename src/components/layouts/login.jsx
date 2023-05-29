
import React, { useEffect, useState } from "react";
import TextField from "../atomic/textField";


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
        const errors = {};
        for (const fieldName in data) {
            if (!data[fieldName]) {
                errors[fieldName] = `${fieldName} обязательно для заполнения`;
            }
        }
        setError(errors);
        return Object.keys(err).length === 0

    };

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

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
