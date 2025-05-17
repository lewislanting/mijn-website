var locationDiv = document.getElementById("location");
locationDiv.textContent = "Loading your location and IP address."

fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
        locationDiv.textContent = `IP: ${data.ip} Location: ${data.city} ${data.postal}, ${data.country_name}`;
    })
    .catch(error => {
        console.error("Error fetching location:", error);
        locationDiv.textContent = "Unable to detect your location or IP address."
    });
