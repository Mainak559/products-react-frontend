import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categorieService from "../Service/categorie.service";

const ShowCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    categorieService
      .getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError("Error fetching categories. Please try again later.");
      });
  };

  const handleEditCategory = (id) => {
    categorieService.getCategoryById(id)
      .then((res) => {
        setSelectedCategory(res.data);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
        setError("Error fetching category details. Please try again later.");
      });
  };

  const handleUpdateCategory = () => {
    if (selectedCategory) {
      categorieService.editCategory(selectedCategory)
        .then(() => {
          setSelectedCategory(null);
          fetchData();
        })
        .catch((error) => {
          console.error("Error updating category:", error);
          setError("Error updating category. Please try again later.");
        });
    }
  };

  const handleDeleteCategory = (id) => {
    categorieService.deleteCategory(id)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
        setError("Error deleting category. Please try again later.");
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">All Categories</div>
            {error && <p className="fs-4 text-center text-danger">{error}</p>}

            <div className="card-body">
              <ul>
                {categories.map((category) => (
                  <li key={category.id_categorie}>
                    <div className="d-flex align-items-center">
                      {category.nom_categorie}
                      <div className="ms-auto">
                        <button
                          className="btn btn-primary me-2 mb-2" // Adjusted margin here
                          onClick={() => handleEditCategory(category.id_categorie)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger mb-2" // Adjusted margin here
                          onClick={() => handleDeleteCategory(category.id_categorie)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional section for editing a selected category */}
      {selectedCategory && (
        <div className="col-md-6 offset-md-3 mt-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Edit Category</div>
            <div className="card-body">
              <label>Enter Category Name</label>
              <input
                type="text"
                name="nom_categorie"
                className="form-control"
                onChange={(e) => setSelectedCategory({ ...selectedCategory, [e.target.name]: e.target.value })}
                value={selectedCategory.nom_categorie}
              />
              <button
                className="btn btn-primary col-md-12 mt-2"
                onClick={handleUpdateCategory}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCategories;