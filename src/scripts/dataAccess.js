import { render } from "./main.js"
   
const applicationState = {
        parties: []
      }
    
    const mainContainer = document.querySelector("#container")
    
    const API = "http://localhost:8088"

    export const fetchRequests = () => {
        return fetch(`${API}/parties`)
            .then(response => response.json())
            .then(
                (serviceRequests) => {
                    // Store the external state in application state
                    applicationState.parties = serviceRequests
                }
            )
    }
    
    mainContainer.addEventListener(
        "stateChanged",
        customEvent => {
            if (customEvent.target.method = "POST")
            render()
        }
    )
    
    export const getRequests = () => {
        return applicationState.parties.map(party => ({...party}))
    }

    export const sendRequest = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }

    return fetch(`${API}/parties`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}