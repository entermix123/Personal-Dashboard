import { Button, Card, Input, Textarea, Typography } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneCompany } from "../../../hooks/useCompanies";
import { useForm } from "../../../hooks/useForm";
import companyAPI from "../../../api/companies-api";

export default function CompanyEdit() {
    const navigate = useNavigate();
    const { companyId } = useParams();
    const [ company ] = useGetOneCompany(companyId);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(company, async (values) => {             // update game object with values from form

        // TODO: implement Modal Component
        const isConfirmed = confirm('Are you sure you want to update this company?');  //  set basic confirmation dialog box 
        
        if (isConfirmed) {
            await companyAPI.update(companyId, values);
        
            navigate(`/company/${companyId}/details`);
        }
        
    },  true);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Edit Company
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to update this Company.
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
                            name="revenue"
                            value={values.revenue}
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
                    <Button  
                        type="submit"
                        onChange={changeHandler}
                        value="Register" 
                        className="mt-6 btn submit" 
                        fullWidth>
                        Update Company
                    </Button>
                </form>
            </Card>
        </div>
    );
}