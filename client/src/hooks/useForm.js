import {useEffect, useState} from 'react';

export function useForm(initialValues, submitCallback, reinitializeFomr = false) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if (reinitializeFomr) {
            setValues(initialValues);       // reinitialize form values
        }
    }, [initialValues, reinitializeFomr]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);

        setValues(initialValues);   // clear form
    }
    
    return {
        values,
        changeHandler,
        submitHandler
    }

}