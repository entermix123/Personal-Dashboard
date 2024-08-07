import { useEffect, useState } from 'react';

export function useForm(initialValues, submitCallback, reinitializeForm = false) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if (reinitializeForm) {
            setValues(initialValues);       // reinitialize form values
        }
    }, [initialValues, reinitializeForm]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        submitCallback(values);
    }
    
    // Add a new function to manually reset the form
    const resetForm = () => {
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        submitHandler,
        resetForm     
    }
}