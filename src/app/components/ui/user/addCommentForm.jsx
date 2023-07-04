import React, { useState } from "react";
import SelectField from "../../common/form/selectField";
import AriaField from "../ariaField";
import PropTypes from "prop-types";

const AddCommentForm = ({ onSubmitForm, users }) => {
    const [formData, setFromData] = useState({
        userSelect: "",
        comment: ""
    });

    const handleSelect = (target) => {
        setFromData({
            ...formData,
            [target.name]: target.value
        });
    };

    const handleArea = (e) => {
        setFromData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = (e) => {
        e.preventDefault();
        onSubmitForm(formData);
    };

    return (
        <form onSubmit={handleForm}>
            {users !== null ? (
                <SelectField
                    defaultOption={"ПРИВЕТ МИР"}
                    label={"Выбор пользователя"}
                    name={"userSelect"}
                    options={users}
                    value={formData.userSelect}
                    onChange={handleSelect}
                />
            ) : null}
            <AriaField
                onChange={handleArea}
                name={"comment"}
                value={formData.comment}
            />
            <button className={"btn btn-primary"}>Отправить</button>
        </form>
    );
};

AddCommentForm.propTypes = {
    users: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([null])]),
    onSubmitForm: PropTypes.func.isRequired
};

export default AddCommentForm;
