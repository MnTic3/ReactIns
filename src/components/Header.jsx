import React from 'react';
import logo from 'media/barrel-logo.png'


const Header = () => {
    return <header>
        <ul className="nav-bar">
            <li>
                <img src={logo} alt="logo-deposito" className="logo" />
            </li>
            <li>
                <button className="button mainButton">Nuevo Pedido</button>
            </li>
            <li>
                <div className="search">
                    <input placeholder="Search Product" type="search" name="search" className="inpSearch" />
                    <i className="fas fa-search iconSearch"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Iniciar Sesion</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
};

export default Header;
