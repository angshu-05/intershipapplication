document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Collect form data
        const formData = new FormData(form);
        let data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Confirm the form submission
        const confirmationMessage = `
            Your response has been recorded:
            Name: ${data['name'] || ''}
            Father's Name: ${data['fatherName'] || ''}
            Mother's Name: ${data['motherName'] || ''}
            Date of Birth: ${data['dob'] || ''}
            Phone Number: ${data['phone'] || ''}
            Email: ${data['email'] || ''}
            Gender: ${data['gender'] || ''}
            Course Year: ${data['year'] || ''}
            Selected Company: ${data['Google'] || data['Microsoft'] || data['Tcs'] || data['Meta'] || data['Amazon'] || data['Adove'] || data['Flipkart'] || data['Apple'] || data['Samsung'] || data['Cognizant'] || data['Oracle'] || data['Dell'] || data['Wipro'] || data['Others'] || ''}
            Comments: ${data['comments'] || 'None'}
        `;

        alert(confirmationMessage);
    });
});
