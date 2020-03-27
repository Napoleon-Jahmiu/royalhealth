// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });




function payWithPaystack () {
var  handler = PaystackPop.setup ({
    key = 'pk_test_77b31b8f3ebf740c3220d053e6dc8a173215d933', 
    email = 'Napoleonjay09@gmail.com',
    amount = '200000',
    metadata: {
        custom_fields: [
            {
                displayName: "Mobile Number",
                variableName: "mobileNumber",   
                value: "+2349068884870",

            }
        ]
    },

    callback: function (response) {
        // after the transfer haae been completed.
        alert ('success. transaction ref is ' + response);
    },

    onClose: function () {
        // When the User close the Payment Modal
        alert ('Transaction Cancelled')
    }
});

// This will open the paystack payment Modal
handler.openIframe()
}