import { getRequests } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"
     
    const listItems = requests.map(request => {
        return `
    <li class="request">
        ${request.description}
        <button class="button"
                id="request--${request.id}">
            Delete
        </button>
    </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    
    return html
}
