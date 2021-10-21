//  list the numbers 1 to 31 as options
// in the day birthdate dropdown menu
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

//  list the numbers 1970 to 2010 as options
// in the year birthdate dropdown menu
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

// check for valid input as specified in the assignment
function checkValidation(){
    // if there are any warnings, clear them
    if (document.getElementById("warnings") !== null){
        document.getElementById("form").removeChild(document.getElementById("warnings"));
    }
    // regex for username: A username should only contain
    // lowercase letters and numbers. It cannot be shorter
    // than 4 characters and longer than 12 characters.
    let usernameRegex = RegExp("^([a-z]|[0-9]){4,12}$");
    // regex for email: An email address should contain “@”
    // and end in .net, .com, .org or .edu.
    let emailRegex = RegExp(".*@.*(\\.edu|\\.org|\\.com|\\.net)$");
    // regex for phone number: A phone number should be 10
    // digits with hyphens (123-456-7890)
    let phoneRegex = RegExp("(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)");
    // regex for password: A password should contain at least
    // 1 uppercase character, 1 lowercase character, 1 number
    // and 1 special character.
    let passwordRegex = RegExp(".*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\\W).*");

    // create a paragraph to put the warnings and errors in
    let warnings = document.createElement("p");
    warnings.id = "warnings";

    // for the username, email, phone, and password inputs:
    // if the value of the element is empty, show the red error,
    // else if the value of the element does not comply with the
    // regex, show the orange error.
    // for gender and birthday:
    // if the value of the element is empty, show the red error.
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

    // add the warnings to the page
    document.getElementById("form").appendChild(warnings);

    // if there are no warnings, check for both the password and the
    // confPassword for matching. If they match go to the home page,
    // else show an alert saying that the passwords do not match
    if (warnings.innerHTML === "") {
        if (document.getElementById("password").value !== document.getElementById("confPassword").value){
            alert("Passwords Do Not Match.")
        } else {
            window.location.href = "index.html"
        }
    }
}

// clear all input and warndings
function clearAll(){
    let warnings = document.getElementById("warnings")
    document.getElementById("form").removeChild(document.getElementById("warnings"));
}

// show the days in the birthday dropdown menu
listDays();
// show the years in the birthday dropdown menu
listYears();
