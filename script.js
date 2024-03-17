form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(form);
    const email = formData.get('email');
    const phone = formData.get('phone');

    // Validate form data
    if (!email || !phone) {
        alert('Please fill in all fields!');
        return;
    }

    // Send form data to server
    try {
        const response = await fetch('your-api-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                phone: phone
            })
        });

        // Check if the request was successful
        if (response.ok) {
            alert('Form submitted successfully!');
            // You can redirect the user or show a success message, etc.
        } else {
            alert('Failed to submit the form. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit the form. Please try again later.');
    }
});