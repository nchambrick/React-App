import React from "react";
import { Link } from "react-router-dom";

function Layout({children}) 
{
    return (
         <div className="container mt-4">
            <h3 className="text-center mb-4">To-do List</h3>
            <nav>
                <Link className="btn btn-primary me-2" to="/"> Home </Link>
                <Link className="btn btn-success me-2" to="/add"> Add New </Link>
                <Link className="btn btn-info" to="/contact"> Contact </Link>
            </nav>
            {children}
         </div>   
    )
}

export default Layout;