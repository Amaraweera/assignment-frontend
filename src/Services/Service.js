import axios from "axios"
const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchOrganization = async (request) => {
    console.log("Request", request);
    const URL = `http://assignment.test/api/organizations?page=${request.payload.page}&search=${request.payload.search}`;
    const res = await axios.get(URL,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        })
    return res;
};

export const fetchTickets = async (request) => {
    const URL = `http://assignment.test/api/tickets?page=${request.payload.page}&search=${request.payload.search}`;
    const res = await axios.get(URL,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        })
    return res;
};

export const fetchUsers = async (request) => {
    const URL = `http://assignment.test/api/users?page=${request.payload.page}&search=${request.payload.search}`;
    const res = await axios.get(URL,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        })
    return res;
};