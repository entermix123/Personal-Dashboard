import { useGetAllCompanies } from "../../../hooks/useCompanies";
import CompanyListItem from "./company-list-item/CompanyListItem";

export default function Catalog() {
    const [ companies ] = useGetAllCompanies();

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">

            
        {companies.length > 0
            ? companies.map(company => <CompanyListItem key={company._id} {...company} /> )
            : <h3 className="no-articles">No Companies yet</h3>
        }
            </div>
        </section>

    );
}