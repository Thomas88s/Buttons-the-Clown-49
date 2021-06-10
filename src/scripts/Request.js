import { getRequests } from "./dataAccess.js"


export const Requests = () => {
    const parties = getRequests()

    let html = "<ul>"
     
    const listItems = parties.map(parties => {
        return `
    <li class="parties">
       ${parties.parentsName} at ${parties.address} on ${parties.date}! 
        <button class="button"
                id="parties--${parties.id}">
            Delete
        </button>
    </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
