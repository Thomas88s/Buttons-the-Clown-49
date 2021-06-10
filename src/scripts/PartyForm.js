
    import { sendRequest } from "./dataAccess.js"



    const mainContainer = document.querySelector("#container")

    mainContainer.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "submitRequest") {
            // Get what the user typed into the form fields
            const parentName = document.querySelector("input[name='parentName']").value
            const childName = document.querySelector("input[name='childName']").value
            const numberOfChildren = document.querySelector("input[name='numberOfChildren']").value
            const partyAddress = document.querySelector("input[name='partyAddress']").value
            const partyDate = document.querySelector("input[name='partyDate']").value
            const lengthOfParty = document.querySelector("input[name='lengthOfParty']").value
    
         
            // Make an object out of the user input
            const dataToSendToAPI = {
                parentsName: parentName,
                childsName: childName,
                numberOfChildren: numberOfChildren,
                address: partyAddress,
                date: partyDate,
                length: lengthOfParty
            }
    
            // Send the data to the API for permanent storage
            sendRequest(dataToSendToAPI)
        }
    })
    



export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfChildren">Number of Children Attending</label>
            <input type="text" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfParty">Party Length</label>
            <input type="number" name="lengthOfParty" class="input" />
        </div>

        <button class="button" id="submitRequest">Get This Party Started!</button>
    `

    return html
}