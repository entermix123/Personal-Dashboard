import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import { useState } from "react";

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

    const registerHandler = async (values) => {
        // make simple validation for password match
        if (values.password !== values["confirm-password"]) {
            return setError("Passwords missmatch"); // if passwords do not match show error
        }
        try {
            await register(values.email, values.password); // try to register with provided email and password

            navigate("/"); // navigate after successful register
        } catch (err) {
            setError(err.message); // if error occurred show error message
            console.error(err.message);
        }
    };

    // useForm hook to manage form state and handle
    const { values, changeHandler, submitHandler } = useForm(
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
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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

{
    /* <section id="register-page" className="content auth">
    <form id="register" onSubmit={submitHandler}>
    <div className="container">
    <div className="brand-logo"></div>
    <h1>Register</h1>
    
    <label htmlFor="email">Email:</label>
    <input
    type="email"
    id="email"
    name="email"                        // required
    value={values.email}                // required
    onChange={changeHandler}            // required
    placeholder="maria@email.com"
    autoComplete="email"                // added for better security
    />
    
    <label htmlFor="pass">Password:</label>
    <input
    type="password"
    name="password"                     // required
    value={values.password}             // required
    onChange={changeHandler}            // required
    id="register-password"
    autoComplete="new-password"         // added for better security
    />
    
    <label htmlFor="con-pass">Confirm Password:</label>
    <input
    type="password"
    name="confirm-password"             // required
    value={values['confirm-password']}  // required
    onChange={changeHandler}            // required
    id="confirm-password"
    autoComplete="new-password"         // added for better security
    />
    
    {/* show error if passwords do not match or other error*/
}
// {error && (
//     <p>
//     <span style={{fontSize:'18px', color: 'red'}}>{error}</span>
//     </p>
// )};

// <input
// className="btn submit"
// type="submit"
// value="Register"
// />

// <p className="field">
// <span>
// If you already have profile click{" "}
// <a href="#">here</a>
// </span>
// </p>
// </div>
// </form>
// </section> */}
