
document.addEventListener("DOMContentLoaded", () => {
    let pin = prompt("Enter PIN to unlock:");
    if (pin === "956420") {
        document.getElementById("cipher").classList.remove("hidden");
    }
});

function encrypt() {
    const input = document.getElementById("input").value;
    const output = btoa(input);  // Simple Base64
    document.getElementById("output").value = output;
}

function decrypt() {
    const input = document.getElementById("input").value;
    try {
        const output = atob(input);
        document.getElementById("output").value = output;
    } catch (e) {
        document.getElementById("output").value = "Invalid input.";
    }
}
