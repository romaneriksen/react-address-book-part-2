import { useState, useEffect, createContext} from "react";
import { Link } from "react-router-dom";
import ContactList from "./ContactList";
export const DeleteContext = createContext()

export default function Dashboard() {

    const url = "https://boolean-uk-api-server.fly.dev/romaneriksen/contact"
    const [data, setData] = useState([])
    const [render, setRender] = useState(0)

    const reRender = () => {
        setRender(render+1)
    }

    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setData(jsonData)
    }
        fetchData()
    },[render])

    console.log(data)

    return (
        <>
            <main className="dashboard-layout">
                <section>
                    <h1>Contact list</h1>
                    <DeleteContext.Provider value = {{reRender}}>
                        <ContactList contacts={data} />
                    </DeleteContext.Provider>
                </section>
                <section>
                    <h1>Create contact</h1>
                    <Link to = {'/createcontact'}>
                        <button style={{ width: '200px', height: '40px', fontSize: '20px' }}>Create a contact!</button>
                    </Link>
                    {/* <CreateContact /> */}
                </section>
            </main>
            
        </>
    )



}