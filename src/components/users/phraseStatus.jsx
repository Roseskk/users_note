import React from "react";

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

export default PhraseStatus;
