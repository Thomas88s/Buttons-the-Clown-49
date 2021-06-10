



export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parents Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Childs Name</label>
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
            <label class="label" for="LengthOfParty">Party Length</label>
            <input type="number" name="LengthOfParty" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}