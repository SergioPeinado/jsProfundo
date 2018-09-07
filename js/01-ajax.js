$(document).ready(function () {

    // Load
    // $('#datos').load('https://reqres.in/');

    // Get y Post

    $.get('https://reqres.in/api/users', {page: 3}, function (response) {
        response.data.forEach((element, index)=> {
            $('#datos').append('<p>'+element.first_name+ ' ' +element.last_name+'</p>');
        });
    });

    $('#createUser').submit(function (e) {
        e.preventDefault();

        var user = {
            name: $("input[name='name']").val(),
            web: $("input[name='web']").val()
        };

        // $.post($(this).attr("action"), user, function (response) {
        //     console.log(response);
        // }).done(function () {
        //     alert("Usuerio añadido correctamente");
        // });

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr("action"),
            data: user,
            beforeSend: function () {
                console.log("Enviando usuario....");
            },
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log("Ha ocurrido un error");
            },
            timeout: 10000
        });

        return false;
    })
});