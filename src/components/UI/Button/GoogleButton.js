import { Fragment } from "react";
import classes from "./GoogleButton.module.css"

const GoogleButton = () => {

    return (
    <div className={classes.loginBtn}>
        <button className={classes.loginBtnGoogle}>
        Login with Google
        </button>

        <button className={classes.loginBtnFacebook}>
        Login with Facebook
        </button>
    </div>   
    )
}

export default GoogleButton;