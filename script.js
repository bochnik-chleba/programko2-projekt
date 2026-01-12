const form = document.getElementById("form");

let editingThis=null;

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const majitel = document.getElementById("majitel").value;
    const tel = document.getElementById("predvolba").value + " " + document.getElementById("tel").value;

    /*
    function ()
        {
            if(!document.getElementById("tel").value)
            {
                return "neuveden";
            }

            const regTel = /^([0-9]{3})+((\s|[-]+){1})*([0-9]{3})+((\s|[-]+){1})*([0-9]{3})$/

            if(!regTel.test(document.getElementById("tel").value))
            {
                return "bad";
            }

            return document.getElementById("predvolba").value + " " + document.getElementById("tel").value;
        }

        if(tel=="bad")
        {
            alert("Neplatné telefonní číslo!");
            return;
        }
   }
    */

    const email = document.getElementById("email").value ?
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
    const zvire = document.getElementById("druh").value;
    const datum = document.getElementById("datum").value;
    const notes = document.getElementById("notes").value;
    const urgent = document.getElementById("urgent").checked;

    const timetable = document.getElementById("timetable");

    if(editingThis!=null)
    {

    }

    const newAppointment = document.createElement("div");
    newAppointment.className="appointment";

    const name = document.createElement("h3");
    name.innerText=majitel + " - " + zvire + "\n" + datum;

    if(urgent)
    {
        newAppointment.style.backgroundColor="red";
    }

    const inner = document.createElement("p");
    inner.innerText="Telefon: " + tel +"; Email: " + email;
    inner.innerText+= notes ? "\n // " + notes : "";

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText="Zrušit";

    cancelBtn.addEventListener("click",(e)=>{

        newAppointment.remove();
    })

    const editBtn = document.createElement("button");
    editBtn.innerText="Upravit";

    newAppointment.appendChild(name);
    newAppointment.appendChild(inner);
    newAppointment.appendChild(cancelBtn);
    newAppointment.appendChild(editBtn);

    editBtn.addEventListener("click",(e)=>{
        editingThis=e.target.parentElement;

        document.getElementById("submit").value="Změnit";
    })

    timetable.appendChild(newAppointment);
    form.reset();
});