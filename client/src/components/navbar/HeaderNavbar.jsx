import { Link } from "react-router-dom";
import React from "react";
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";
import { useAuthContext } from "../../context/AuthContext";

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { userId } = useAuthContext();

    // profile menu component
    const profileMenuItems = [
        {
            label: "My Profile",
            navigate: `/users/${userId}/details`,
            icon: UserCircleIcon,
        },
        {
            label: "Edit Profile",
            navigate: `/users/${userId}/edit`,
            icon: Cog6ToothIcon,
        },
        {
            label: "Inbox",
            navigate: "/#",
            icon: InboxArrowDownIcon,
        },
        {
            label: "Help",
            navigate: "/#",
            icon: LifebuoyIcon,
        },
        {
            label: "Log Out",
            navigate: "/logout",
            icon: PowerIcon,
        },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, navigate, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${
                                    isLastItem ? "text-red-500" : ""
                                }`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as={Link}
                                to={navigate}
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "About Us",
        navigate: "/aboutus",
        description: "Read more about our company and its mission.",
    },
    {
        title: "Contact Us",
        navigate: "/contactus",
        description: "Leave a message or reach out to our support team.",
    },
    {
        title: "Go PRO",
        navigate: "/#",
        description: "Check out our premium features and services.",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(
        ({ title, navigate, description }) => (
            <Link to={navigate} key={title}>
                <MenuItem>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        {title}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                    >
                        {description}
                    </Typography>
                </MenuItem>
            </Link>
        )
    );

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-normal"
                    >
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                            Info{" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                    <Card
                        color="blue"
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md"
                    >
                        <RocketLaunchIcon
                            strokeWidth={1}
                            className="h-28 w-28"
                        />
                    </Card>
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                Pages{" "}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: "My Companies",
        navigate: "/mycompanies",
        icon: CubeTransparentIcon,
    },
    {
        label: "Staff",
        navigate: "/#",
        icon: UserCircleIcon,
    },
    {
        label: "Docs",
        navigate: "/#",
        icon: CodeBracketSquareIcon,
    },
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavListMenu />
            {navListItems.map(({ label, navigate, icon }, key) => (
                <Typography
                    key={label}
                    as={Link}
                    to={navigate}
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, {
                            className: "h-[18px] w-[18px]",
                        })}{" "}
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}

export default function HeaderNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const { isAuthenticated, userId } = useAuthContext();

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="flex">
                    {isAuthenticated && (
                        <Link to="/dashboard">
                            <Button size="sm" variant="text">
                                DashBoard
                            </Button>
                        </Link>
                    )}
                    <Link to="/">
                        <Button size="sm" variant="text">
                            Catalog
                        </Button>
                    </Link>
                </div>

                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>

                {!isAuthenticated ? (
                    <div className="flex items-center space-x-4">
                        <Link to="/login">
                            <Button size="sm" variant="text">
                                Log In
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button size="sm" variant="text">
                                Register
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <Link to="/logout">
                            <Button size="sm" variant="text">
                                Logout
                            </Button>
                        </Link>
                        <ProfileMenu />
                    </div>
                )}
            </div>
        </Navbar>
    );
}
