import { render } from "./main.js"
   
const applicationState = {
        parties: [],
        clowns: [],
        completions: []
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

    export const fetchClowns = () => {
        return fetch(`${API}/clowns`)
            .then(response => response.json())
            .then(
                (serviceClowns) => {
                    // Store the external state in application state
                    applicationState.clowns = serviceClowns
                }
            )
    }
    export const fetchCompletions = () => {
        return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (serviceCompletions) => {
                // Store the external state in application state
                applicationState.completions = serviceCompletions
            }
            )
        }
        
        export const getRequests = () => {
            return applicationState.parties.map(party => ({...party}))
        }
        export const getClowns = () => {
            return applicationState.clowns.map(clown => ({...clown}))
        }
        export const getCompletions = () => {
            return applicationState.completions.map(completion => ({...completion}))
        }

        mainContainer.addEventListener(
            "stateChanged",
            customEvent => {
                if (customEvent.target.method = "POST")
                render()
            }
        )
        
        
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

    export const saveCompletion = (completion) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(completion)
        }


        return fetch(`${API}/completions`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                // mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

            })
    }

export const deleteRequest = (id) => {
    return fetch(`${API}/parties/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}