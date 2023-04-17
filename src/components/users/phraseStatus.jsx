import React from "react";
import PropTypes from "prop-types";

const PhraseStatus = ({ len }) => {
    return (
        <>
            {len <= 0 ? (
                <h1 className={"text-danger"}>Никому ты не нужен</h1>
            ) : (
                <h1 className={"text-primary"}>
                    {len} человек тусанет с тобой сегодня
                </h1>
            )}
        </>
    );
};

PhraseStatus.propTypes = {
    len: PropTypes.number.isRequired
};

export default PhraseStatus;
