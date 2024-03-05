import axios from 'axios';

const API_URL = "https://ems-backend-mainak.azurewebsites.net"; 

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/saveProduct", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/");
    }

    getProductById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteProduct(id) {
        return axios.get(API_URL + "/deleteProduct/" + id);
    }

    editProduct(product) {
        return axios.post(API_URL + "/editProduct/" + product.id, product);
    }

}

export default new ProductService;