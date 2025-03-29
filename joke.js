document.addEventListener("DOMContentLoaded", () => {
    fetchJoke("Any");
});

function fetchJoke(category) {
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const jokeElement = document.getElementById("joke");
            const titleElement = document.getElementById("joke-title");

            if (data.type === "single") {
                jokeElement.textContent = data.joke;
            } else {
                jokeElement.textContent = `${data.setup} ... ${data.delivery}`;
            }

            if (category === "Any") {
                titleElement.textContent = "Joke Of The Day";
            } else if (category === "Pun") {
                titleElement.textContent = "A Random Pun";
            } else {
                titleElement.textContent = `A Random ${category} Joke`;
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById("joke").textContent = "Failed to load joke. Try again!";
        });
}
