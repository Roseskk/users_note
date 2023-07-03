import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";

const UserEditor = (props) => {
    const { userId } = useParams();
    const [changeData, setChangeData] = useState();
    const [qualities, setQualities] = useState([]);
    const [professions, setProfession] = useState([]);

    useEffect(() => {
        api.users.getById(userId).then((data) =>
            setChangeData({
                email: data.email,
                profession: data.profession,
                qualities: data.qualities,
                name: data.name,
                sex: data.sex
            })
        );
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);
    const handleChange = (e) => {
        setChangeData((prevState) => ({
            ...prevState,
            [e.name]: e.value
        }));
    };

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(changeData);
        const { profession, qualities } = changeData;
        api.users
            .update(userId, {
                ...changeData,
                profession: getProfessionById(profession),
                qualities: getQualities(qualities)
            })
            .then((res) => console.log(res));
        console.log({
            ...changeData,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        });
    };

    // console.log(changeData);
    return (
        <form onSubmit={handleSubmit}>
            {changeData && (
                <>
                    <TextField
                        label="Электронная почта"
                        name="email"
                        value={changeData.email}
                        onChange={handleChange}
                        // error={errors.email}
                    />
                    <SelectField
                        label="Выбери свою профессию"
                        // defaultOption={changeData.}
                        options={professions}
                        name="profession"
                        onChange={handleChange}
                        value={changeData.profession._id}
                        // error={errors.profession}
                    />
                    <RadioField
                        options={[
                            { name: "Male", value: "male" },
                            { name: "Female", value: "female" },
                            { name: "Other", value: "other" }
                        ]}
                        value={changeData.sex}
                        name="sex"
                        onChange={handleChange}
                        label="Выберите ваш пол"
                    />
                    <MultiSelectField
                        options={qualities}
                        onChange={handleChange}
                        defaultValue={changeData.qualities}
                        name="qualities"
                        label="Выберите ваши качества"
                    />
                    <button
                        className="btn btn-primary w-100 mx-auto"
                        type="submit"
                        // disabled={!isValid}
                    >
                        Submit
                    </button>
                </>
            )}
        </form>
    );
};

export default UserEditor;
