let income = 0;
let expense = 0;

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const list = document.getElementById("transaction-list");
    const item = document.createElement("li");

    item.innerHTML = `${description} - ₹${amount} (${type})
    <button onclick="this.parentElement.remove(); updateBalance(-${amount}, '${type}')">Delete</button>`;

    list.appendChild(item);

    updateBalance(amount, type);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function updateBalance(amount, type) {
    if (type === "income") {
        income += amount;
    } else {
        expense += amount;
    }

    document.getElementById("income").textContent = "₹" + income;
    document.getElementById("expense").textContent = "₹" + expense;
    document.getElementById("balance").textContent = "₹" + (income - expense);
}
