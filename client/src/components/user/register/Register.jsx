import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import { useState } from "react";
import { AlertGost } from "../../alerts/AlertGost";

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const initialValues = { email: "", password: "", "confirm-password": "" };

export default function Register() {
    const [error, setError] = useState("");
    const register = useRegister();
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const registerHandler = async (values) => {

        if (!validateEmail(values.email)) {
            return setError("Invalid email format");
        }

        if (values.password.length < 3) {
            return setError("Password must be at least 3 characters long");
        }

        if (values.password !== values["confirm-password"]) {
            return setError("Passwords missmatch");             // if passwords do not match show error
        }

        try {
            await register(values.email, values.password);      // try to register with provided email and password
            resetForm();                                        // reset form
            navigate("/");                                      // navigate after successful register
        } catch (err) {
            setError(err.message);                              // if error occurred show error message
            console.error(err.message);
        }
    };

    // useForm hook to manage form state and handle
    const { values, changeHandler, submitHandler, resetForm } = useForm(
        initialValues,
        registerHandler
    );

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
                    <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="email"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />

                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Password
                        </Typography>
                        <Input
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            autoComplete="current-password"
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
                            Confirm Password
                        </Typography>
                        <Input
                            name="confirm-password"
                            value={values['confirm-password']}
                            onChange={changeHandler}
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            autoComplete="current-password"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    {error && (
                        <AlertGost message={error} />
                    )}
                    <Button  
                        type="submit"
                        value="Register" 
                        className="mt-6 btn submit" 
                        fullWidth>
                        sign up
                    </Button>
                    <Typography
                        color="gray"
                        className="mt-4 text-center font-normal"
                    >
                        Already have an account?{" "}
                        <Link to={`/login`} className="font-medium text-gray-900">
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}