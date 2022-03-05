// Add your code here
function submitData(name, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
        "name": name,
        "email": email,
        })
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(body => addContact(body.id))
        .catch(function (error) {
            let message = "Unauthorized Access";
            alert("Unauthorized Access");
            console.log(error.message);
            document.body.append(message);
        })
}
function addContact(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID;
}
submitData("name", "name@name.com");