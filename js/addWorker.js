document.getElementById("idPersonForm").onsubmit = (e) => {
    e.preventDefault();

    const name = document.querySelector("#idNamePerson").value;
    const surname = document.querySelector("#idSurnamePerson").value;
    const rate = document.querySelector("#idRate").value;
    const days = document.querySelector("#idDays").value;
    const worker = new Worker(name, surname, rate, days);
    addWorkerToTable(worker);
    e.target.reset();
};

const addWorkerToTable = (worker) => {
    const row = document.createElement("tr");
    const num = document.createElement("th");
    num.innerHTML = worker.getNumber();
    num.scope = "row";
    row.appendChild(num);
    for (elem of worker.getArrayFields()) {
        const col = document.createElement("td");
        col.innerHTML = elem;
        row.appendChild(col);
    }
    document.querySelector("#idBodyTable").appendChild(row);

};