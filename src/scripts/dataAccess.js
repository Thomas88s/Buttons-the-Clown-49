
    const applicationState = {
        requests: []
      }
    
    const mainContainer = document.querySelector("#container")
    
    const API = "http://localhost:8088"

    export const fetchRequests = () => {
        return fetch(`${API}/parties`)
            .then(response => response.json())
            .then(
                (serviceRequests) => {
                    // Store the external state in application state
                    applicationState.requests = serviceRequests
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
        return applicationState.requests.map(request => ({...request}))
    }