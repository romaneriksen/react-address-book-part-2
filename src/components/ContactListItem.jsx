import { Link } from "react-router-dom";
import { useContext } from "react";
import { DeleteContext } from "./Dashboard";

export default function ContactListItem({ contact }) {

    const url = "https://boolean-uk-api-server.fly.dev/romaneriksen/contact"
    const {reRender} = useContext(DeleteContext)

    const handleDelete = async () => {
        const response = await fetch(`${url}/${contact.id}`, {
            method: "DELETE",
        })

        if (response.ok) {
            console.log(`Post ${contact.id} deleted`)
            const data = await response.json()
            reRender()
        } else {
            console.error("Failed to delete post")
        }
    }

    return (
        <li>
            <Link to={`/view/${contact.id}`} state={{contact:contact}}>
                <h3>{contact.firstName} {contact.lastName}</h3>
            </Link>
            <button onClick={handleDelete}>Delete contact</button>
        </li>
    )
    
}
