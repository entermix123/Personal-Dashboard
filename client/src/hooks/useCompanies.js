import { useEffect, useState } from 'react';
import companyAPI from '../api/companies-api';

export function useGetAllCompanies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        
        // example 1 for syntax for useEffect with IIFE (Immediately Invoked Function Expression)
        (async () => {
            const result = await companyAPI.getAll();

            setCompanies(result);
        })();

        // // example 2 for syntax for useEffect with internal asynchronous function that must be called
        // const actionName = async () => {
        //     const result = await companyAPI.getAll()
        //     setCompany(result)
        // }
        // actionName();

        // example 3 - use short promise syntax
        // companiyAPI.getAll().then(result => setCompanies(result));

    }, []);

    return [companies, setCompanies];
}

export function useGetOwnedCompanies(ownerId) {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {

        (async () => {
            const result = await companyAPI.getOwned(ownerId);

            setCompanies(result);
        })();
    }, [ownerId]);

    return [companies, setCompanies];
}

export function useGetOneCompany(companyId) {
    const [ company, setCompany ] = useState({});           // set state for current game


    useEffect(() => {                                               // set useEffect to change current company content
        (async () => {                                              // set async function to make GET request for specific company
            const result = await companyAPI.getOne(companyId);      // call getOne function from games-api.js
            setCompany(result);                                     // set game state as result game details
        })();
    }, [companyId]);

    return [
        company,
        setCompany,
    ];
}

export function useCreateCompany() {
    const companyCreateHandler = (companyData) => companyAPI.create(companyData);

    return companyCreateHandler;
}
