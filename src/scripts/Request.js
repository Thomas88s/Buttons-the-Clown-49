import { getRequests, deleteRequest, getClowns } from "./dataAccess.js"
import { saveCompletion } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("parties--")) {
        const [,partiesId] = click.target.id.split("--")
        deleteRequest(parseInt(partiesId))
    }
})



export const Requests = () => {
    const parties = getRequests()
    const clowns = getClowns()

  
    const sortedParties = parties.sort((a,b) => {
      return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
    })
    
    
    let html = "<ul>"
     
    const listItems = sortedParties.map(parties => {
        return `
    <li class="parties">
       ${parties.parentsName} at ${parties.address} on ${parties.date}!  &nbsp;&nbsp;&nbsp;    
       <select class="clowns" id="clowns">
       <option value="">Choose</option>
       ${
                clowns.map(
                    clown => {
                        return `<option value="${parties.id}--${clown.id}">${clown.name}</option>`
                    }
                ).join("")
            }
            </select>  
            <button class="button" id="parties--${parties.id}">
                Deny
            </button>    
    </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [partyId, clownId] = event.target.value.split("--")  
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
          
            const completion = { 
                party: partyId,
                clown: clownId,
                date_created: new Date() 
            }
            
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
                saveCompletion(completion)
        }
    }
)

