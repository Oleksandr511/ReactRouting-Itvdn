import { Link } from "react-router-dom"
import { useState } from "react"
import '../../components/Modal/ModalWnd'
import ModalWnd from "../../components/Modal/ModalWnd"

export default function Users() {
    const [modalState, setModalState] = useState(false);
    return (
        <div className="MAIN">
            <h1>USERS</h1>

            <ModalWnd call={modalState} onDestroy={() => setModalState(false)} />
            <ul>
                <li>
                    <Link to='/users/walles'>
                        John Walles
                    </Link>
                    <button onClick={() => setModalState(true)}>X</button>
                </li>
                <li>
                    <Link to='/users/beanit'>
                        Jim Beanit
                    </Link>
                    <button onClick={() => setModalState(true)}>X</button>

                </li>
            </ul>
        </div>
    )
}