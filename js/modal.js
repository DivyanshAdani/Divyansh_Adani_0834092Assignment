$(document).ready(function () {
    console.log("Modal script is ready.");
    
    // Create and inject the modal HTML
    var modalHtml = `
        <div class="modal" id="imageModal">
        <img src="" alt="Image" width="800" height="450">
        <button id="closeModalBtn">Close</button>
        </div>
    `;

    // Append the modal HTML to the body
    $('body').append(modalHtml);
    console.log("Modal HTML is injected.");

    // Get the modal and buttons
    var modal = $("#imageModal");
    var modalImage = modal.find("img");
    
    // var photoBox =  document.querySelector('a.photo-box img').innerHTML
    
    
    // Open the modal when a thumbnail is clicked
    $("a.photo-box").on("click", function () {
        // var photoBox1 =  document.querySelector('a.photo-box img:last-child');
        var photoBox1 = document.querySelector('img.active');
        var src = photoBox1.src;
        console.log(photoBox1);
        // var src = $(this).attr("src");
        console.log(src)
        // var src = $(this).attr("src");
        modalImage.attr("src", src);
        modalImage.addClass("vertical-center");
        modal.show();
        console.log("Modal opened.");
    });

    // Close the modal when the close button is clicked
    $("#closeModalBtn").on("click", function () {
        modal.hide();
        console.log("Modal closed.");
    });

    // Close the modal if the user clicks anywhere outside of it
    $(document).on("click", function (event) {
        if (event.target === modal[0]) {
            modal.hide();
            console.log("Modal closed by clicking outside.");
        }
    });
});
