import React from 'react';

const PhraseStatus = ({len}) => {

    const renderPhrase = (number) => {
        if (number <= 0 ) return  <h1 className={'text-danger'}>Никому ты не нужен</h1>
        return <h1 className={'text-primary'}>{number} человек тусанет с тобой сегодня</h1>
    }

    return (
        <>
            {renderPhrase(len)}
        </>
    );
};

export default PhraseStatus;