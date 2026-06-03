document.getElementById("testBtn").addEventListener("click", async () => {

    const response = await fetch(
        "http://localhost:3000/api/message"
    );

    const data = await response.json();

    alert(data.message);

});