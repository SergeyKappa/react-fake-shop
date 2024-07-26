import React from "react";

const Header = (props) => {
    console.log(props)
    return (
        <h1>
            {props.id}: Hello i'm: {props.title}.
        </h1>
    )
}

const Text = () => {
    return (
        <>
            <p>
                Фундаментально, JSX является синтаксическим сахаром для функции
                React.createElement(component, props, ...children).
            </p>
            <p>
                Т.к. JSX компилируется в вызовы функции React.createElement,
                библиотека React всегда должна находиться в области видимости
                вашего кода JSX.
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header title="React" id={1} />
            <Header title="App.js" id={2} />
            <Text />
        </>
    )
}


export default App