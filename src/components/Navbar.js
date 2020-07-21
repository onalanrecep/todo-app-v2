import React, { Component } from 'react'
import "../styles/Navbar.scss"

export default class Navbar extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        const { showForm } = this.props;
        return (
            <header className="header">
               <h1 className="header-logo">KodTodo</h1>  
                <nav className="header-menu">
                    <button name="ifClickGroup" onClick={showForm} className="header-menu-button">Kolon Ekle</button>
                    <button name="ifClickEvent" onClick={showForm}  className="header-menu-button">Kart Ekle</button>
                </nav>
            </header>
        )
    }
}
