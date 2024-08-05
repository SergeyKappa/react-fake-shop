import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer /Footer'
import {StandardImageList}   from 'containers/Main/Main'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <StandardImageList/>
            <Footer />
        </>
    )
}

// import logo from './airbnb-logo.png'

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar">
//                 <a
//                     href="https://ru.airbnb.com/?_set_bev_on_new_domain=1722837921_EAM2QyMDYzYzJmNG"
//                     target="_blank"
//                 >
//                     <img src={logo} className="logo" alt="logo" />
//                 </a>

//                 <ul className="navbar--container">
//                     <li className="navbar--item">
//                         <a>Menu</a>
//                     </li>
//                     <li className="navbar--item">
//                         <a>Contacts</a>
//                     </li>
//                     <li className="navbar--item">
//                         <a> Our Products</a>
//                     </li>
//                     <li className="navbar--item">
//                         <a>About Us</a>
//                     </li>
//                 </ul>
//             </nav>
//         </>
//     )
// }

// const Header = (props) => {
//     console.log(props)
//     return (
//         <>
//             {' '}
//             <h1>
//                 {props.id}: Hello i'm: {props.title}.
//             </h1>
//         </>
//     )
// }

// const Text = () => {
//     return (
//         <>
//             <p>
//                 Фундаментально, JSX является синтаксическим сахаром для функции
//                 React.createElement(component, props, ...children).
//             </p>
//             <p>
//                 Т.к. JSX компилируется в вызовы функции React.createElement,
//                 библиотека React всегда должна находиться в области видимости
//                 вашего кода JSX.
//             </p>
//         </>
//     )
// }
