$(()=>
$('#addtask').click(()=>
$('#todolist').append(
    $('<li>').append(
        $('<span>')
        .text(
    $('#newtask').val())
    .click(function(){$(this).parent().toggleClass('done')} )
).append(
    $('<button>').text('X')
    .click(function(){$(this).parent().remove()})
).append(
    $('<button>').text('⬆')
    .click(function(){
        $(this).parent().insertBefore(
        $(this).parent().prev())
    })
).append(
    $('<button>').text('⬇')
    .click(function(){
        $(this).parent().insertAfter(
            $(this).parent().next()
        )
    })
)
)
).next().click(()=>{$('.done').remove()})
)