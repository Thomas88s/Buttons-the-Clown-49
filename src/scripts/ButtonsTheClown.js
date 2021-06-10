import { PartyForm } from "./PartyForm.js"
import { Requests } from "./Request.js"

    export const FunnyStuff = () => {
        return `
        <h1>Buttons the Clown Wonderful Super Action-Packed Blowout Extravaganza!</h1>
        <section class="partyForm">
            ${PartyForm()}
        </section>
    
        <section class="partyRequests">
        <h2>Parties to Blowout!</h2>
        <div class
       ${Requests()}
        </section>
        `
    }
    