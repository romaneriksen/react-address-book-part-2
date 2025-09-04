import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"


export default function CreateContact() {

    const url = "https://boolean-uk-api-server.fly.dev/romaneriksen/contact"
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(url, {
            method: "POST",
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
            console.log("Post created")
            const data = await response.json()
            navigate("/")
        } else {
            console.error("Failed to create post")
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
                    onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
                <input 
                    name="Lastname" 
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                >
                </input>
            </section>
            
            <section>
                <input 
                    name="City"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                >
                </input>
                <input 
                    name="Street" 
                    placeholder="Street"
                    onChange={(e) => setStreet(e.target.value)}
                >
                </input>
            </section>
            <button type="submit">Create contact</button>
            </>
        </form>
        
    )
}