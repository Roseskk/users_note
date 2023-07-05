import React, {useContext, useEffect, useState} from 'react';
import {toast} from "react-toastify";
import QualityService from "../services/quality.service";
import PropTypes from "prop-types";


const QualityContext = React.createContext()

export const useQuality = () => {
    return useContext(QualityContext)
}

export const QualityProvider = ({children}) => {
    const [qualities, setQualities] = useState([])

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getQualitiesList();
    }, []);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    function getQualities(arrayOfId) {
        return arrayOfId.map(id => qualities.find(q => q._id === id))
    }

    async function getQualitiesList() {
        try {
            const { content } = await QualityService.get()
            setQualities(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    return(
        <QualityContext.Provider value={{qualities, getQualities}}>
            {children}
        </QualityContext.Provider>
    )
}

QualityProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};