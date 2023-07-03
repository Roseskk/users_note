import React, {useRef} from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {

    let styleRef = useRef({
        width: '60px',
        height: '40px'
    })
    let textRef = useRef('Блок')

    const handleRef = () => {
        textRef.current.innerHTML = 'text'
        styleRef.current.style.height = '80px'
        styleRef.current.style.width = '150px'
    }

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={styleRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: `${styleRef.current.height}`,
                    width: `${styleRef.current.width}`,
                    color: "white"
                }}
            >
                <small ref={textRef}>{textRef.current}</small>
            </div>
            <button onClick={handleRef} className={'btn btn-primary mt-2'}>Кнопка для изменения БЛОК</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
