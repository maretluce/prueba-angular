$(document).ready(function() {

    /*hamburguesa*/
    $('#burger').on('click', function(){
        $(this).toggleClass('open');
        $('#menuPpal').toggleClass('show');
    });
    
});