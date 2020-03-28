<script>
  PaystackPop.setup({
   key = 'pk_test_77b31b8f3ebf740c3220d053e6dc8a173215d933', 

   email: 'customer@email.com',
   amount: 10000,
   container: 'paystackEmbedContainer',
   callback: function(response){
        alert('successfully subscribed. transaction ref is ' + response.reference);
    },
  });
</script>