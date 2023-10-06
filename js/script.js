//Name: Divyansh Adani
function fetchWithGetJSON() {
    $.getJSON('team.json', function(data) {
        $.each(data, function(index, member) {
            $('#team').append('<h2>' + member.name + '</h2>');
            $('#team').append('<h5>' + member.position + '</h5>');
            $('#team').append('<p>' + member.bio + '</p>');
        });
    });
}

function fetchWithAjax() {
    $('#team').text("Loading...");
   
    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#team').text("Loading...");
        },
        success: function(data) {
            setTimeout(function() { 
                $('#team').empty(); 
                $.each(data, function(index, member) {
                    $('#team').append('<h2>' + member.name + '</h2>');
                    $('#team').append('<h5>' + member.position + '</h5>');
                    $('#team').append('<p>' + member.bio + '</p>');
                });
            }, 3000);
        },
        error: function() {
            $('#team').text("The content could not be retrieved.");
        }
    });
}

$(document).ready(function() {
    fetchWithAjax();
});