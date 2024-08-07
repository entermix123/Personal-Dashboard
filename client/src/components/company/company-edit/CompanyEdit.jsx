import { Button, Card, Input, Textarea, Typography } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneCompany } from "../../../hooks/useCompanies";
import { useForm } from "../../../hooks/useForm";
import { useState } from "react";
import { AlertGost } from "../../alerts/AlertGost";
import { ConfirmDialog } from "../../popup/ConfirmDialog";
import companyAPI from "../../../api/companies-api";

export default function CompanyEdit() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { companyId } = useParams();
    const [ company ] = useGetOneCompany(companyId);

    const validateForm = () => {
        if (values.name.length < 3) {
            setError("Company name must be at least 3 characters long");
            return false;
        }

        if (values.employees < 1) {
            setError("Company must have at least 1 employee");
            return false;
        }

        if (values.revenue < 1) {
            setError("Company revenue must have at least $1 revenue");
            return false;
        }

        if (values.category === "") {
            setError("Company must have a category");
            return false;
        }

        setError(""); // Clear any previous errors
        return true;
    };

    const confirmationHandler = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsDialogOpen(true);
        }
    };

    const confirmSubmit = async () => {
        try {
            await companyAPI.update(companyId, values);
            resetForm();
            navigate(`/company/${companyId}/details`);
        } catch (err) {
            setError(err.message);
            console.error(err.message);
        }

        setIsDialogOpen(false);
    };

    const {
        resetForm,
        changeHandler,
        submitHandler,
        values,
    } = useForm(company, confirmSubmit, true);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Edit Company
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to update this Company.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={confirmationHandler}>
                    <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Company Name
                    </Typography>
                    <Input
                        size="lg"
                        name="name"
                        value={values.name || ''}
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
                            value={values.category || ''}
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
                            value={values.summary || ''}
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
                            value={values.employees || ''}
                            onChange={changeHandler}
                            type="number"
                            min="0" 
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
                            name="revenue"
                            value={values.revenue || ''}
                            onChange={changeHandler}
                            type="number"
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
                        Update Company
                    </Button>
                </form>
            </Card>
            <ConfirmDialog 
                message={`Are you sure you want to update this ${company.name}?`}
                callback={submitHandler}
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            />
        </div>
    );
}