import React,{useEffect,useState} from "react";
import { Link,useHistory } from "react-router-dom";
import { auth } from "../firebase-config";

const Menu = () =>
{

    const history = useHistory()
    const [user,setUser] = useState(null)
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>
        {
            if(user )
            {
                setUser(user.email)
                console.log(user.email)
            }
        })
},[])

    const Logout = () =>
    {
        auth.signOut()
        setUser(null)
        history.push('/')
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Index</Link>
                    </li>
                    <li>
                    {
                    !user ? (<Link className="nav-link" to="/Login">Login</Link>) : (<span></span>)
                    }
                    </li>
                    <li>
                    {
                    !user ? (<Link className="nav-link" to="/Admin">Admin</Link>) : (<span></span>)
                    }
                    </li>
                </ul>
                {
                    user ? (<button onClick={Logout} className="btn btn-danger">Logout</button>) : (<span></span>)
                }
            </nav>
        </div>
    )
}


export default Menu;