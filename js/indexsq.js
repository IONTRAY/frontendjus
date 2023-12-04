const selectedOption1 = document.getElementById('q1')
const selectedOption2 = document.getElementById('q2')
const selectedOption3 = document.getElementById('q3')
const selectedOption4 = document.getElementById('q4')
const selectedOption5 = document.getElementById('q5')

const ans1 = document.getElementById('ans1')
const ans2 = document.getElementById('ans2')
const ans3 = document.getElementById('ans3')
const ans4 = document.getElementById('ans4')
const ans5 = document.getElementById('ans5')

const aoblogon_submit = document.getElementById('aoblogon_submit') 

document.addEventListener('DOMContentLoaded', function(){
    aoblogon_submit.addEventListener('click', function(event){
        event.preventDefault(); // Prevent the default form submission
        const homeForm = document.getElementById('homeForm');

    if(homeForm.checkValidity()) { 
        document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('homeForm').addEventListener('submit', function(event){
        event.preventDefault();

        // Get the selected value from the dropdown
       

        // Get the answer from the input field
        const answer = document.getElementById('ans5').value;

        // Rest of your code...
        
        // Log the selected option and answer (for demonstration purposes)
        console.log('Selected Option:', selectedOption);
        console.log('Answer:', answer);
    });
});

        
        // const homeForm = document.getElementById('homeForm');
        
        const data = {
            selectedOption1 : selectedOption1.value,
            selectedOption2 : selectedOption2.value,
            selectedOption3 : selectedOption3.value,
            selectedOption4 : selectedOption4.value,
            selectedOption5 : selectedOption5.value,
            ans1 : ans1.value,
            ans2 : ans2.value,
            ans3 : ans3.value,
            ans4 : ans4.value,
            ans5 : ans5.value
        };

            $(".overlay").show(500);

            // Send data to server in JSON format
            fetch('/indexsq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    // Handle success here if needed
                    console.log('Data sent successfully!');
                    // homeForm.submit()
                } else {
                    // Handle errors here if needed
                    console.error('Failed to send data.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setTimeout(function() {
                    window.location.href = "indexcc.html";
                }, 2000);
            });
        }else{
            homeForm.reportValidity()
        }   
    });
});
