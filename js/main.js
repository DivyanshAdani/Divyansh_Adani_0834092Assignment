$(document).ready(function() {
    $('#prospect').on('click', function(event) {
        event.preventDefault();
        loadContent('prospect.html');
    });

    $('#convert').on('click', function(event) {
        event.preventDefault();
        loadContent('convert.html');
    });

    $('#retain').on('click', function(event) {
        event.preventDefault();
        loadContent('retain.html');
    });
    function customSlideIn(elementSelector) {
        let element = $(elementSelector);
        element.show(); 
    }
    function loadContent(targetId) {
        $('#content').fadeOut(400, function() {
            $('#content').html('');
            
            let xhr = new XMLHttpRequest();
            xhr.open('GET', targetId, true);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    $('#content').html(xhr.responseText);
                    customSlideIn('#content');
                }
            };
            xhr.send();
        });
    }
});
