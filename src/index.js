import React from 'react'
import ReactDOM from 'react-dom'

// const element = (
//     <>
//         <h1>Hello, React.js</h1>
//         <p>
//             Додатки, створені за допомогою самого лише React, зазвичай мають
//             лише один кореневий вузол DOM. Якщо ви інтегруєте React в існуючий
//             додаток — ви можете мати будь-яку кількість ізольованих кореневих
//             DOM вузлів.
//         </p>
//         <p>
//             Для рендерингу React-елементу в кореневому DOM вузлі, викличте
//             функцію ReactDOM.render() з React-елементом та кореневим DOM вузлом
//             у якості аргументів:
//         </p>
//     </>
// )

// function App() {
//     return (
//         <>
//             <h1>Hello, i'm App Component.</h1>
//             <p>
//                 Додатки, створені за допомогою самого лише React, зазвичай мають
//                 лише один кореневий вузол DOM. Якщо ви інтегруєте React в
//                 існуючий додаток — ви можете мати будь-яку кількість ізольованих
//                 кореневих DOM вузлів.
//             </p>
//         </>
//     )
// }
const Header = () => {
    return <h1>Hello everyone: i start learn React!!! </h1>
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
            <Header />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

//ReactDOM.render(element, document.getElementById('root'))
//const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<App/>);
//root.render(element);

//
function helle() {
    const name = 'Иван-Царевич'
    const ele = <h1>Здравствуй, {name}!</h1>
    //root.render(ele)
}
// setInterval(helle, 1500)

//
function tick() {
    const ent = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <p>Я делаю сайт на React.</p>
        </div>
    )
    //root.render(ent)
}
// setInterval(tick, 2000)

//
function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'Алесандер',
    lastName: 'Хацкевич',
}

const elem = <h1>Здравствуй, {formatName(user)}!</h1>
//root.render(elem)

//
function getGreeting(user) {
    if (user) {
        return <h1>Здравствуй, {formatName(user)}!</h1>
    }
    return <h1>Здравствуй, незнакомец.</h1>
}
//root.render(getGreeting())

//
const eleent = (
    <div>
        <h1>Здравствуйте!</h1>
        <h2>Рады вас видеть.</h2>
    </div>
)
//root.render(eleent)

//
function Welcome(props) {
    return <h1>Привет, {props.name}</h1>
}
const ement = <Welcome name="Алиса" />
//root.render(ement);// Привет Алиса
