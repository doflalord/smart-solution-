// Mobile Menu

const toggleBtn = document.getElementById("toggle");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("menu-active");
});


// Subscribe Form

const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("subemail");
const message = document.getElementById("submessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        message.textContent =
            "Please enter a valid email";

        message.style.color = "red";

        return;
    }

    let subscribers =
        JSON.parse(
            localStorage.getItem("subscribers")
        ) || [];

    if (subscribers.includes(email)) {

        message.textContent =
            "Email already exists";

        message.style.color = "orange";

        return;
    }

    subscribers.push(email);

    localStorage.setItem(
        "subscribers",
        JSON.stringify(subscribers)
    );

    message.textContent =
        "Subscribed Successfully";

    message.style.color = "green";

    form.reset();
});


const contact_form = document.getElementById("contactForm");
const savedData = document.getElementById("savedData");

displayData();

contact_form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name.length < 3) {
        document.getElementById("nameError").textContent =
            "Name must be at least 3 characters";
        valid = false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Invalid email";
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById("messageError").textContent =
            "Message must be at least 10 characters";
        valid = false;
    }

    if (!valid) return;

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        name,
        email,
        message
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    contact_form.reset();

    displayData();
});

function displayData() {
    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    savedData.innerHTML = "";

    users.forEach((user, index) => {
        savedData.innerHTML += `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p>${user.message}</p>
                <button onclick="deleteUser(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deleteUser(index) {
    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    users.splice(index, 1);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    displayData();
}