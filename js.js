$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();  
        const URL = $('#URL').val();
        const NovoI = $('<li style="display: none"></li>');
        $(`<img src="${URL}" />`).appendTo(NovoI)
        $(`
            <div class="overlay">
                <a href="${URL}" target="_blanck" title="Ver tamanho original">
                    Ver tamanho original
                </a>
            </div>
        `).appendTo(NovoI);
        $(NovoI).appendTo('ul');
        $(NovoI).fadeIn(1000);
        $('#URL').val('');
    })
})