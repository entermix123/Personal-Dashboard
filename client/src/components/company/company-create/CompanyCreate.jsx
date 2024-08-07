import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useCreateCompany} from "../../../hooks/useCompanies";
import { useNavigate } from "react-router-dom";
import { AlertGost } from "../../alerts/AlertGost";

import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";

const initialValues = {
    name: '',
    category: '',
    summary: '',
    employees: '',
    revenue: '',
};

export default function CompanyCreate() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const createCompany = useCreateCompany();

    const createHandler = async (values) => {

        if (values.name.length < 3) {
            return setError("Company name must be at least 3 characters long");
        }

        if (values.category === "") {
            return setError("Company must have category");
        }

        if (values.employees < 1) {
            return setError("Company must be at least 1 employee");
        }

        if (values.revenue < 1) {
            return setError("Company revenue must have at least $1 revenue");
        }

        try {
            const { _id } = await createCompany(values);
            resetForm();
            navigate(`/company/${_id}/details`);
            
        } catch (err) {
            setError(err.message);    
            console.error(err.message);
        }
    };

    const { values, changeHandler, submitHandler, resetForm } = useForm(initialValues, createHandler);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Create Company
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to create a Company.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
                    <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Company Name
                    </Typography>
                    <Input
                        size="lg"
                        name="name"
                        value={values.name}
                        onChange={changeHandler}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="name"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />

                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Category
                        </Typography>
                        <Input
                            name="category"
                            value={values.category}
                            onChange={changeHandler}
                            type="text"
                            size="lg"
                            placeholder="Service/Production"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            autoComplete="category"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Summary
                        </Typography>
                        <Textarea
                            name="summary"
                            value={values.summary}
                            onChange={changeHandler}
                            type="text"
                            size="lg"
                            placeholder="Summary of the company"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            autoComplete="summary"
                            rows={4}
                            variant="outlined"
                            inputlabelprops={{
                                className: "before:content-none after:content-none",
                            }}
                        />


                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            employees
                        </Typography>
                        <Input
                            name="employees"
                            value={values.employees}
                            onChange={changeHandler}
                            type="number"
                            min="1" 
                            placeholder="1" 
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            autoComplete="employees"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />

                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Revenue
                        </Typography>
                        <Input
                            type="number"
                            name="revenue"
                            value={values.revenue}
                            onChange={changeHandler}
                            min="1" 
                            placeholder="$" 
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            autoComplete="revenue"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    {error && (
                        <AlertGost message={error} />
                    )}
                    <Button  
                        type="submit"
                        value="Register" 
                        className="mt-6 btn submit" 
                        fullWidth>
                        Create Company
                    </Button>
                </form>
            </Card>
        </div>
    );
}
