document.getElementById("uploadBtn").addEventListener("click", async () => {

    const fileInput = document.getElementById("pdfFile");

    const file = fileInput.files[0];

    if (!file) { alert("Please select a PDF first.");
        return;
    }

    const formData = new FormData();

    formData.append("pdf", file);

    const response = await fetch(
        "http://localhost:3000/upload", 
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    console.log(data);

    alert("PDF processed successfully!");

});