import axios from "axios";

const API_ROOT = "/api";

const responseBody = res => res.body;

const request = {
    get: url => axios.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
    all: page => request.get(`/articles?limit=10`)
};

export default {
    Articles
};