import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categorieService from "../Service/categorie.service";

const EditCategorie = () => {
  const [category, setCategory] = useState({
    id_categorie: "",
    nom_categorie: "",
    // Add other category attributes as needed
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    categorieService
      .getCategoryById(id)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
        setError("Error fetching category. Please try again later.");
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();

    categorieService
      .editCategory(category)
      .then(() => {
        navigate("/categories");
      })
      .catch((error) => {
        console.error("Error updating category:", error);
        setError("Error updating category. Please try again later.");
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Edit Category</div>
            {error && <p className="fs-4 text-center text-danger">{error}</p>}

            <div className="card-body">
              <form onSubmit={handleUpdateCategory}>
                <div className="mb-3">
                  <label>Enter Category Name</label>
                  <input
                    type="text"
                    name="nom_categorie"
                    className="form-control"
                    onChange={handleChange}
                    value={category.nom_categorie}
                  />
                </div>
                {/* Add other category form fields as needed */}
                <button className="btn btn-primary col-md-12">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategorie;
