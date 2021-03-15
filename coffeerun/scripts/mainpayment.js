(function (window) {
    'use strict';
    var $ = window.jQuery;
    var PAYMENT_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    var Payment=App.Payment;
    var payment= new Payment(PAYMENT_SELECTOR);


    payment.addSubmitHandler(function() {
        var $name = $('input[name=username]').val();
        var $title = $('input[name=title]').val();
        
        document.getElementById('message').innerHTML = 'Thank you for your payment, ' + $title + ' ' + $name + '.';
        $('#finished').modal();
    });

})(window);
