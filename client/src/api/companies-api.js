import requester from './requester'

const BASE_URL = 'http://localhost:3030/data/companies'

export const getAll = async () => {
    const result = await requester.get(BASE_URL);

    const companies = Object.values(result);   
    return companies;
}

export const getLatest = async () => {
    const result = await requester.get(`${BASE_URL}?sortBy=_createdOn%20desc&pageSize=3`)

    const companies = Object.values(result);   
    return companies;
}

export const getOwned = async (ownerId) => {
    const result = await requester.get(`${BASE_URL}?where=_ownerId%3D%22${ownerId}%22`)

    const companies = Object.values(result);   
    return companies;
}

// add route for 'GET' specific company data
export const getOne = (companyId) => requester.get(`${BASE_URL}/${companyId}`);

export const create = (companyData) => requester.post(`${BASE_URL}`, companyData);

// make object and export it for mass use in other components
const companyAPI = {
    getOne,
    getAll,
    getLatest,
    getOwned,
    create,
}

export default companyAPI;