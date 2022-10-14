import { useContext } from "react";
import AuthContext from "../store/auth-context";

const User = () => {
    const authCtx = useContext(AuthContext);

    return(
        <button onClick={authCtx.logout}>Logout</button>
    )
}

export default User;