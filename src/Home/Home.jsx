import { Outlet, Link } from "react-router-dom";

import './home.css';


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link className="react-link" to="/self-components">SelfComponents</Link>
                <Link className="react-link" to="/Invoices">Invoices</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Home;
