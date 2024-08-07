import { useAuthContext } from '../../../context/AuthContext';
import { useGetOwnedCompanies } from '../../../hooks/useCompanies';
import { Button } from "@material-tailwind/react";
import MyCompanyListItem from './company-list-item/MyCompanyListItem';
import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function MyCompanyList() {
    const { userId } = useAuthContext();
    const [ companies ] = useGetOwnedCompanies(userId);
    
return (
    <section className="text-gray-600 body-font">
        
        <div className="container px-5 py-24 mx-auto">
            <div className="flex justify-between items-center mb-12">
            <Link to="/company/create">
                <Button
                    size="lg"
                    variant="outlined"
                    color="blue-gray"
                    className="flex items-center gap-3"
                    >
                    <CubeTransparentIcon className="h-6 w-6" />
                    Create New Company
                </Button>
            </Link>
            </div>
            <div className="flex flex-wrap -m-4">
            {companies.length > 0
            ? companies.map(company => <MyCompanyListItem key={company._id} {...company} /> )
            : <h3 className="no-articles">No Companies yet</h3>
        }    
            </div>
        </div>
    </section>

);
}
