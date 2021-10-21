function listDays(){
    let days = document.getElementById("day");
    for (let i = 0; i <= 31; i++){
        let element = document.createElement("option");
        if (i === 0){
            element.textContent = "";
            element.value = "";
        } else {
            element.textContent = i.toString();
            element.value = i.toString();
        }
        days.appendChild(element);
    }
}

function listYears(){
    let days = document.getElementById("year");
    for (let i = 1969; i <= 2010; i++){
        let element = document.createElement("option");
        if (i === 1969){
            element.textContent = "";
            element.value = "";
        } else {
            element.textContent = i.toString();
            element.value = i.toString();
        }
        days.appendChild(element);
    }
}

function checkValidation(){
    if (document.getElementById("warnings") !== null){
        document.getElementById("form").removeChild(document.getElementById("warnings"));
    }
    let usernameRegex = RegExp("^([a-z]|[0-9]){4,12}$");
    let emailRegex = RegExp(".*@.*(\\.edu|\\.org|\\.com|\\.net)$");
    let phoneRegex = RegExp("(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)");
    let passwordRegex = RegExp(".*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\\W).*");
    let warnings = document.createElement("p");
    warnings.id = "warnings";
    if (document.getElementById("username").value === ""){
        warnings.innerHTML += "Please Enter <span style='color: red'>Username</span><br>";
    }
    else if(!usernameRegex.exec(document.getElementById("username").value)){
        warnings.innerHTML += "Please Enter <span style='color: orange'> A Valid Username</span><br>";
    }
    if (document.getElementById("email").value === "") {
        warnings.innerHTML += "Please Enter <span style='color: red'>Email</span><br>";
    }
    else if(!emailRegex.exec(document.getElementById("email").value)){
        warnings.innerHTML += "Please Enter <span style='color: orange'> A Valid Email</span><br>";
    }
    if (document.getElementById("phone").value === "") {
        warnings.innerHTML += "Please Enter <span style='color: red'>Phone Number</span><br>";
    }
    else if(!phoneRegex.exec(document.getElementById("phone").value)){
        warnings.innerHTML += "Please Enter <span style='color: orange'> A Valid Phone Number</span><br>";
    }
    if (document.getElementById("password").value === "") {
        warnings.innerHTML += "Please Enter <span style='color: red'>Password</span><br>";
    }
    else if(!passwordRegex.exec(document.getElementById("password").value)){
        warnings.innerHTML += "Please Enter <span style='color: orange'> A Valid Password</span><br>";
    }
    if (!document.getElementById("female").checked && !document.getElementById("male").checked && !document.getElementById("other").checked) {
        warnings.innerHTML += "Please Select <span style='color: red'>Gender</span><br>";
    }
    if (document.getElementById("month").value === "" || document.getElementById("day").value === "" || document.getElementById("year").value === "") {
        warnings.innerHTML += "Please Select <span style='color: red'>Birthday</span><br>";
    }
    document.getElementById("form").appendChild(warnings);
    if (warnings.innerHTML === "") {
        if (document.getElementById("password").value !== document.getElementById("confPassword").value){
            alert("Passwords Do Not Match.")
        } else {
            window.location.href = "index.html"
        }
    }
}

function clearAll(){
    let warnings = document.getElementById("warnings")
    document.getElementById("form").removeChild(document.getElementById("warnings"));
}


listDays();
listYears();
