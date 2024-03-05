// categorie.service.js

import axios from 'axios';

const API_URL = 'http://localhost:8084';

class CategorieService {
  getAllCategories() {
    return axios.get(API_URL + '/categories');
  }

  getCategoryById(id) {
    return axios.get(API_URL + `/category/${id}`);
  }

  saveCategory(category) {
    return axios.post(API_URL + '/saveCategory', category);
  }

  deleteCategory(id) {
    return axios.delete(API_URL + `/deleteCategory/${id}`);
  }

  editCategory(category) {
    // Assuming you have an id in your category object
    return axios.post(API_URL + `/editCategory/${category.id_categorie}`, category);
  }
}

export default new CategorieService();
