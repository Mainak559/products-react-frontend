import React, { useState } from "react";
import categorieService from "../Service/categorie.service.js";

const AddCategorie = () => {
    const [categorie, setCategorie] = useState({
        nom_categorie: "",
        // Add other category attributes as needed
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setCategorie({ ...categorie, [e.target.name]: value });
    };

    const CategorieRegister = (e) => {
        e.preventDefault();

        categorieService
            .saveCategory(categorie)
            .then((res) => {
                console.log("Category Added Successfully");
                setMsg("Category Added Successfully");
                setCategorie({
                    nom_categorie: "",
                    // Reset other category attributes as needed
                });
            })
            .catch((error) => {
                console.error("Error adding category:", error);
                // Handle the error or display a user-friendly message
            });
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">Add Category</div>
                            {msg && <p className="fs-4 text-center text-success">{msg}</p>}

                            <div className="card-body">
                                <form onSubmit={(e) => CategorieRegister(e)}>
                                    <div className="mb-3">
                                        <label>Enter Category Name</label>
                                        <input
                                            type="text"
                                            name="nom_categorie"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={categorie.nom_categorie}
                                        />
                                    </div>
                                    {/* Add other category form fields as needed */}
                                    <button className="btn btn-primary col-md-12">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCategorie;
