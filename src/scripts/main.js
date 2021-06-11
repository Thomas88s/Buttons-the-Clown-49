import { FunnyStuff } from "./ButtonsTheClown.js"
import { fetchRequests, fetchClowns, fetchCompletions } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests()
    .then(fetchClowns)
    .then(fetchCompletions)
    .then(
        () => {
            mainContainer.innerHTML = FunnyStuff()
        }
        )
    }
    
    render()
    