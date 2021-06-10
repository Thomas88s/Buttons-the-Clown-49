



export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parents Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyBudget">Budget</label>
            <input type="number" name="partyBudget" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date needed</label>
            <input type="date" name="partyDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}