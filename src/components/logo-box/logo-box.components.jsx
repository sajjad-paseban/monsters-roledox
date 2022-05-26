import React from "react";
import "../logo-box/logo-box.styles.css";
import Logo from "../../public/monster2-logo.png"
export const LogoBox = props =>(
    <div className="logo-bar">
        <img width="100" height="100" src={Logo} alt="" />
        <h3>React Monsters</h3>
    </div>
)