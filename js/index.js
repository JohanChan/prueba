function index() {
    var currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    var formattedDate = currentDate.toISOString().slice(0, 4);
    currentDateElement.textContent = "© " + formattedDate + " Optimum Star.";
}

index();