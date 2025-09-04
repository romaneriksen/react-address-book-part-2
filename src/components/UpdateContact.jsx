import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"


export default function UpdateContact() {

    const url = "https://boolean-uk-api-server.fly.dev/romaneriksen/contact"
    
    const location = useLocation();
    const {state} = location 
    const contact = state.contact

    const [firstName, setFirstName] = useState(contact.firstName)
    const [lastName, setLastName] = useState(contact.lastName)
    const [city, setCity] = useState(contact.city)
    const [street, setStreet] = useState(contact.street)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${url}/${contact.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                street,
                city,
            }),
        })

        if (response.ok) {
            console.log("Post updated")
            const data = await response.json()
            navigate(`/view/${contact.id}`, {state :{contact:data}})
        } else {
            console.error("Failed to update post")
            navigate("/")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <>
            <section>
                <input 
                    name="FirstName" 
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
                <input 
                    name="Lastname" 
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                >
                </input>
            </section>
            
            <section>
                <input 
                    name="City"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                </input>
                <input 
                    name="Street" 
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                >
                </input>
            </section>
            <button type="submit">Update contact</button>
            </>
        </form>
        
    )
}