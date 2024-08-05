import { useForm } from "../../../hooks/useForm";
import { useCreateCompany} from "../../../hooks/useCompanies";
import { useNavigate } from "react-router-dom";

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
    ravenue: '',
};

export default function CompanyCreate() {
    const navigate = useNavigate();
    const createCompany = useCreateCompany();

    const createHandler = async (values) => {
        try {
            const { _id: companyId } = await createCompany(values);
            navigate(`/companies/${companyId}/details`);
        } catch (err) {
            // set error state and display error message
            console.error(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

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
                            variant="outlined" // or "filled" or "standard" depending on your design preference
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
                            Ravenue
                        </Typography>
                        <Input
                            name="ravenue"
                            value={values.ravenue}
                            onChange={changeHandler}
                            type="number"
                            min="1" 
                            placeholder="$" 
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            autoComplete="ravenue"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />

                    </div>
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
