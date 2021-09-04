import React from "react";

const Login = () =>
{
    return(
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form className="form-group">
                    <input className="form-control mt-4" type="text" placeholder="Enter the email" />
                    <input className="form-control mt-4" type="text" placeholder="Enter the password" />
                    <input type="submit" value="Register User" className="btn btn-dark btn-block mt-4" />
                </form>
            </div>
            <div className="col"></div>
            
        </div>
    )
}

export default Login;