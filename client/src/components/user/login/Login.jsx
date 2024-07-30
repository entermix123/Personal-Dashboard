import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm"
import { useLogin } from "../../../hooks/useAuth"
import { Button, Card, Input, Typography } from "@material-tailwind/react";

// define initial values for form fields
const initialValues = { email: "", password: "" }

export default function Login() {
    // import the useLogin hook from the auth hook file
    const login = useLogin();

    // import the useNavigate hook from react-router-dom to navigate to the home page
    const navigate = useNavigate(); 

    // create a login handler function
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);   // try to login with provided email and password
            navigate("/");                  // navigate after successful login
        } catch (err) {
            console.error(err.message);
        }
    }
    // use the useForm hook to manage form state and handle form submission
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);
    
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Sign In
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to login.
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
                                autoComplete="username"
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
    
                        </div>
                        
                        <Button  
                            type="submit"
                            value="Register" 
                            className="mt-6 btn submit" 
                            fullWidth>
                            sign in
                        </Button>
                        <Typography
                            color="gray"
                            className="mt-4 text-center font-normal"
                        >
                            Do not have an account?{" "}
                            <Link to={`/register`} className="font-medium text-gray-900">
                                Sign Up
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
        );
    }
