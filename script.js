const form = document.getElementById("form");

let editingThis=null;

//todo
//udelat profil zvirete/majitele
//veteritarni minulost mazlicka - posledni vakcinace/ kontrola/ zraneni/ nemoc

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let majitel = document.getElementById("majitel").value;

    const regTel = /^([0-9]{3})+((\s|[-]+){1})*([0-9]{3})+((\s|[-]+){1})*([0-9]{3})$/

    let tel = !document.getElementById("tel").value ?
        "neuveden" :
        !regTel.test(document.getElementById("tel").value) ?
        "bad" :
        document.getElementById("predvolba").value + " " + document.getElementById("tel").value;

    if(tel=="bad")
    {
        alert("Neplatné telefonní číslo!");
        return;
    }


    let email = document.getElementById("email").value ?
        document.getElementById("email").value
        : "neuveden";

    if(email!="neuveden")
    {
        const regEmail = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        if(!regEmail.test(email))
        {
            alert("Neplatná emailová adresa!");
            return;
        }
    }
    let zvire = document.getElementById("druh").value;
    let datum = document.getElementById("datum").value;
    let notes = document.getElementById("notes").value;
    let urgent = document.getElementById("urgent").checked;

    const timetable = document.getElementById("timetable");

    if(editingThis!=null)
    {
        //editingThis
    }

    const newAppointment = document.createElement("div");
    newAppointment.className="appointment";

    const innerName = document.createElement("h3");
    innerName.style.display="inline";
    innerName.className="innerName";
    innerName.innerText=majitel + " - " ;

    const innerAnimal = document.createElement("h3");
    innerAnimal.style.display="inline";
    innerAnimal.className="innerAnimal";
    innerAnimal.innerText= zvire;

    const innerDate = document.createElement("h4");
    innerDate.className="innerDate";
    innerDate.innerText=datum;

    if(urgent)
    {
        newAppointment.style.backgroundColor="red";
    }

    const innerTel = document.createElement("p");
    innerTel.className="innerTel";
    innerTel.innerText="Telefon: " + tel;

    const innerEmail = document.createElement("p");
    innerEmail.className="innerEmail";
    innerEmail.innerText="Email: " + email;

    const innerNotes = document.createElement("p");
    innerNotes.className="innerNotes";
    innerNotes.innerText+= notes ? "// " + notes : "";

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText="Zrušit";

    cancelBtn.addEventListener("click",(e)=>{

        newAppointment.remove();
    })

    const editBtn = document.createElement("button");
    editBtn.innerText="Upravit";

    newAppointment.appendChild(innerName);
    newAppointment.appendChild(innerAnimal);
    newAppointment.appendChild(innerTel);
    newAppointment.appendChild(innerEmail);
    newAppointment.appendChild(cancelBtn);
    newAppointment.appendChild(editBtn);

    editBtn.addEventListener("click",(e)=>{
        editingThis=e.target.parentElement;

        majitel=editingThis.querySelector(".innerTel")

        document.getElementById("submit").value="Změnit";
    })

    timetable.appendChild(newAppointment);
    form.reset();
});