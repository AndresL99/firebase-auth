import React,{useState} from "react";
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";

const Login = () =>
{
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [msgError, setMsgError] = useState(null)

    const RegisterUser = (e) =>
    {
        e.preventDefault()
        auth.createUserWithEmailAndPaswword(email,pass)
        .then(r => {
            history.push('/')
        })
        .catch(e => {
            if(e.code == 'auth/invalid-email')
            {
                setMsgError('Incorrect Email Format')
            }
            if(e.code == 'auth/weak-password')
            {
                setMsgError('Password must be contain 6 or more characters')
            }
        })
        
    }

    const UserLogin = () =>
    {
        auth.signInWithEmailAndPassword(email,pass)
        .then( (r) =>
        {
            history.push('/')
        })
        .catch( (err) =>
        {
            if(err.code == 'auth/wrong-password')
            {
                setMsgError('Incorrect password')
            }
        })
    }

    return(
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegisterUser} className="form-group">
                    <input onChange={(e)=>{setEmail(e.target.value)}} className="form-control mt-4" type="email" placeholder="Enter the email" />
                    <input onChange={(e)=> setPass(e.target.value)} className="form-control mt-4" type="password" placeholder="Enter the password" />
                    <input type="submit" value="Register User" className="btn btn-dark btn-block mt-4" />
                </form>
                <button className="btn btn-success btn-block" onClick={UserLogin}>Sign In</button>
                {
                    msgError !=null ? (<div>
                        {msgError}
                    </div>) : (<span></span>) 
                }
            </div>
            <div className="col"></div>
            
        </div>
    )
}

export default Login;