document.getElementById("signIn").addEventListener("submit", 
    function(event) {
        event.preventDefault();

        const firstName = document.getElementById("fname").value
        const lastName = document.getElementById("lname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const comment = document.getElementById("comment").value


        if (password === "") {
            alert("Enter password")
        } else if (password.length < 8) {

        }

        const result = `Thank you ${firstName}. 
        Form successfully Submitted!`
        document.getElementById("form-data").textContent = result;
    }
);