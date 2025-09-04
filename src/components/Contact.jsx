import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Contact() {

    const location = useLocation();
    const {state} = location 
    const contact = state.contact

    if (!contact) return <p>Loading...</p>

    return (
        <>
            <Link to={`/updatecontact/${contact.id}`} state={{contact:contact}}>
                <button>Update contact</button>
            </Link>
            <article>
            <h2>
                {contact.firstName} {contact.lastName}
            </h2>
            <h3>City: {contact.city}, Street: {contact.street}</h3>
            </article>
        </>
        
    )

}