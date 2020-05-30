// get modal button
var modalButton = document.querySelector('#modalbtn');
// get modal Element
var modalElement = document.getElementById('modal');
// close modal Element
var closeModal = document.getElementById('closebtn');

// add Event listener to openModal
modalButton.addEventListener('click', openModal);

// add Event Listener to close Modal
closeModal.addEventListener('click', closeThisModal);

// add event listener to close modal outside the modal
window.addEventListener('click', clickOutside);

// function for close Modal Element
function closeThisModal() {
    modalElement.style.display = 'none';
}

// Function for open modal Element
function openModal() {
 modalElement.style.display = 'block';
}

function clickOutside(e) {
    if(e.target == modalElement) {
   modalElement.style.display = 'none';
    }
}

function payWithPaystack() {

    var handler = PaystackPop.setup({ 
        key: 'pk_live_c21645921fe5871fbdbff81b279ecf2a24af4956', //put your public key here
        email: 'teamaturalhealth@gmail.com', //put your customer's email here
        amount: 200000, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2348012345678" //customer's mobile number
                }
            ]
        },
        callback: function (response) {
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            $.post("verify.php", {reference:response.reference}, function(status){
                if(status == "success")
                    //successful transaction
                    alert('Transaction was successful');
                else
                    //transaction failed
                    alert(response);
            });
        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
}