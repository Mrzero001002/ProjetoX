$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        console.log("Submit");
        e.preventDefault();  
    })
})