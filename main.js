$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#imagemNova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="imgemLink">
            <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem">
            ver imagem
            </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#imagemNova').val('');
    })
})