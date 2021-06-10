import { FunnyStuff } from "./ButtonsTheClown.js"
import { fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = FunnyStuff()
        }
        )
    }
    
    render()
    