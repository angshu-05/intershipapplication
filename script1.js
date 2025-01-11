document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Clear the page content
        document.body.innerHTML = `
            <div style="text-align: center; margin-top: 50px;">
                <h1>Your Response is Recorded</h1>
                <p>Thank you for submitting your application. We will get back to you shortly!</p>
            </div>
        `;
    });
});
