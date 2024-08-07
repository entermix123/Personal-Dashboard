import { Link, useNavigate } from "react-router-dom";
import { useUpdate } from "../../../hooks/useAuth";
import { useAuthContext } from "../../../context/AuthContext";
import { useForm } from "../../../hooks/useForm";

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { userAdminDetails } from "../../../api/auth-api";

export default function UserEdit() {
    const { userId, email } = useAuthContext();
    const update = useUpdate();
    const navigate = useNavigate();
    const userData = userAdminDetails();
    const user = Object.values(userData);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(user.Object, async (values) => {             // update user object with values from form - not accessable for this server

        // TODO: implement Modal Component
        const isConfirmed = confirm('Are you sure you want to update this company?');  //  set basic confirmation dialog box 
        
        if (isConfirmed) {
            await update(userId, values);
        
            navigate(`/dashboard`);
        }
        
    },  true);
    // console.log(values);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Update User
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter details to update user credentials.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
                    <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        name="email"
                        value={email}
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
                            value={userData.password}
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
                            value={userData['confirm-password']}
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
                    <Link to={`/users/${userId}/details`}>
                    <Button  
                        type="submit"
                        value="Register" 
                        className="mt-6 btn submit" 
                        fullWidth>
                        Update User
                    </Button>
                    </Link>
                </form>
            </Card>
        </div>
    );
}