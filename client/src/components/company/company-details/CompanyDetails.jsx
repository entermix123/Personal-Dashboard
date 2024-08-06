import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneCompany } from "../../../hooks/useCompanies";
import { useForm } from "../../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../../hooks/useComments";
import { useAuthContext } from "../../../context/AuthContext";
import companyAPI from "../../../api/companies-api";
import { Button } from "@material-tailwind/react";

const initialValues = {
    comment: ''
};

export default function CompanyDetails() {
    const navigate = useNavigate();
    const { companyId } = useParams();                    // useParams take specific property of the game
    const [comments, dispatch] = useGetAllComments(companyId);
    const createComment = useCreateComment();
    const { email, userId } = useAuthContext();
    const [ company ] = useGetOneCompany(companyId);   // take specific game and set the state
    const { isAuthenticated } = useAuthContext();

    const{
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {

        try {
            const newComment = await createComment(companyId, comment);

            // setComments(oldComments => [...oldComments, newComment]);
            dispatch({type: 'ADD_COMMENT', payload: {...newComment, author: {email} }});

        } catch (err) {
            console.error(err.message);
        }
    });

    const isOwner = userId === company._ownerId;   // check if current user is the owner of the game

    const companyDeleteHandler = async () => {     // set game delete functionality
        const isConfirmed = confirm(`Are you sure you want to delete ${company.name} Comapnu?`);     // set game delete pop-up confirmation box 
        // TODO: implement Modal dialog
        if (!isConfirmed) {     // check if user confirmed the deletion
            return;
        }

        try {
            await companyAPI.remove(companyId)           // delete game

            navigate('/');
        } catch (err) {                             // check for error
            console.error(err.message);
        }
    }
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    {company.name}
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    {company.summary}
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        The company has yearly revenue of
                    </h2>
                    <p className="leading-relaxed text-base">
                        ${company.revenue}
                    </p>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                    </svg>

                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        This company is type
                    </h2>
                    <p className="leading-relaxed text-base">
                        {company.category}
                    </p>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                    </svg>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        This company has count of employees:
                    </h2>
                    <p className="leading-relaxed text-base">
                        {company.employees}
                    </p>
                    </div>
                </div>
                </div>            
                

                {isOwner && (
                    <div className="flex justify-center gap-4 mt-16">
                    <Link to={`/company/${companyId}/edit`}>
                        <Button
                            size="lg"
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center gap-3"
                            onClick={changeHandler}
                            >
                            Edit Company
                        </Button>
                    </Link>

                    <Button
                        size="lg"
                        variant="outlined"
                        color="blue-gray"
                        className="flex items-center gap-3"
                        onClick={companyDeleteHandler}
                        style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }} // transparent red
                    >
                        Delete Company
                    </Button>

                    </div>
                    )
                }
            </div>

            {/* comment section */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Comments</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Share your thoughts about this company.</p>
                </div>
                
                {comments.length > 0 ? (
                    <div className="flex flex-wrap -m-4">
                        {comments.map(comment => (
                            <div key={comment._id} className="p-4 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded">
                                    <p className="leading-relaxed mb-6">
                                        {comment.text}
                                    </p>
                                    <div className="inline-flex items-center">
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">
                                                {comment.author.email}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No comments yet.</p>
                )}

                {isAuthenticated && (
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="comment" className="leading-7 text-sm text-gray-600">Comment</label>
                                    <textarea 
                                        id="comment" 
                                        name="comment" 
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        value={values.comment}
                                        onChange={changeHandler}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button 
                                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    onClick={submitHandler}
                                >
                                    Submit Comment
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </section>

        

    );
    }