import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Product Management System
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">
                                All Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addCategory" className="nav-link" aria-current="page" href="#">
                                    Add Category
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/showCategories" className="nav-link" aria-current="page" href="#">
                                    All Categories
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addProduct" className="nav-link" aria-current="page" href="#">
                                    Add Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navber;
