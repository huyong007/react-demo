import { getInvoices } from './data';
import { Outlet, useSearchParams } from 'react-router-dom';
import QueryNavLink from "./QueryNavLink";



export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
            <nav style={{ borderRight: "1px solid black", padding: "1rem" }}
            >
                <input value={searchParams.get("filter") || ""}
                    onChange={(e) => {
                        let filter = e.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({})
                        }
                    }} />
                {invoices.filter(invoice => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                    .map(invoice => (
                        <QueryNavLink
                            className='react-link'
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                            style={({ isActive }) => {
                                return {
                                    display: "inline-block",
                                    color: isActive ? "red" : "black"
                                }
                            }}
                        >
                            {invoice.name}
                        </QueryNavLink>
                    )
                    )}
            </nav>
            <Outlet />
        </>
    )
}