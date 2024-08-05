import { Link, useParams } from "react-router-dom";
import { useGetOneCompany } from "../../../hooks/useCompanies";
import { useForm } from "../../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../../hooks/useComments";
import { useAuthContext } from "../../../context/AuthContext";

const initialValues = {
    comment: ''
};

export default function CompanyDetails() {
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

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    Raw Denim Heirloom Man Braid
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
                        Shooting Stars
                    </h2>
                    <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                        pug VHS try-hard.
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
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
                        <circle cx={6} cy={6} r={3} />
                        <circle cx={6} cy={18} r={3} />
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                    </svg>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        The Catalyzer
                    </h2>
                    <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                        pug VHS try-hard.
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
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
                        Neptune
                    </h2>
                    <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                        pug VHS try-hard.
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    </div>
                </div>
                </div>            
                

                {isOwner && (
                    <div className="flex justify-center gap-4 mt-16">
                        <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <Link to="company/edit">
                            Edit Company
                            </Link>
                        </button>

                        <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <Link to="company/delete">
                            Delete Company
                            </Link>
                        </button>
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
                                    <p className="leading-relaxed mb-6">{comment.text}</p>
                                    <div className="inline-flex items-center">
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">{comment.author.email}</span>
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



    



    //     <section id="game-details">
    //     <h1>Game Details</h1>
    //     <div className="info-section">

    //         <div className="game-header">
    //             <img className="game-img" src={game.imageUrl} />
    //             <h1>{game.title}</h1>
    //             <span className="levels">MaxLevel: {game.maxLevel}</span>
    //             <p className="type">{game.category}</p>
    //         </div>

    //         <p className="text">{game.summary}</p>

    //         {/* <!-- Bonus ( for Guests and Users ) --> */}
    //         <div className="details-comments">
    //             <h2>Comments:</h2>
    //             <ul>
    //                 {comments.map(comment => (     
    //                         <li key={comment._id} className="comment">
    //                             <p>{comment.author.email}: {comment.text}</p>
    //                         </li>
    //                     ))
    //                 }
    //             </ul>
    //             {comments.length === 0 && <p className="no-comment">No comments.</p>}
    //         </div>

    //         {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
    //         {isOwner && 
    //         (<div className="buttons">
    //             <a href="#" className="button">Edit</a>
    //             <a href="#" className="button">Delete</a>
    //         </div>
    //         )}
            
    //     </div>

    //     {/* <!-- Bonus --> */}
    //     {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
    //     {isAuthenticated && (
    //         <article className="create-comment">
    //         <label>Add new comment:</label>
    //         <form className="form" onSubmit={submitHandler}>
    //             <textarea 
    //                 name="comment" 
    //                 placeholder="Comment......"
    //                 value={values.comment}
    //                 onChange={changeHandler}
    //             ></textarea>

    //             <input 
    //                 className="btn submit" 
    //                 type="submit" 
    //                 value="Add Comment" 
    //             />
    //         </form>
    //     </article>
    //     )}

    // </section>