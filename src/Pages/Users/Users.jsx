import { Link } from "react-router-dom"

export default function Users() {
    return (
        <div className="MAIN">
            <h1>USERS</h1>
            <ul>
                <li>
                    <Link to='/users/walles'>
                        John Walles
                    </Link>
                </li>
                <li>
                    <Link to='/users/beanit'>
                        Jim Beanit
                    </Link>
                </li>
            </ul>
        </div>
    )
}