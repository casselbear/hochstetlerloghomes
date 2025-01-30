    
    
    //Prevent regular form sumbit, apply POST headers, redirect to Thank You page
    document.getElementById('floorplanForm').addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const form = event.target;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries())
          console.log("Form Data: ", formDataObject)
  
        try {
            const response = await fetch('https://submit-form.com/KvtazvgWj', {
                method: 'POST',
                headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                  },
                body: JSON.stringify(formDataObject),
            });
  
            if (response.ok) {
                // Redirect to the desired page after successful submission
                window.location.href = 'https://hochstetlerloghomes.com/form-thank-you.html';
            } else {
                // Handle errors here
                console.log('There was an issue submitting the form.')
            }
        } catch (error) {
            // Handle network errors here
            console.log('There was a network error submitting the form.');
        }
    });
    