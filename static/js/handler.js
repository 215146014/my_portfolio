$(document).ready(function() {
    $('#weedForm').submit(function(e) {
        e.preventDefault();  // Prevent default form submission

        // Create a FormData object and append the selected image
        var formData = new FormData();
        formData.append('weedfile', $('#weedInput')[0].files[0]);

        // Use jQuery AJAX to submit the form data
        $.ajax({
            url: '/vision',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // Create an image element with the processed image
                var img = new Image();
                img.src = 'data:image/jpg;base64,' + response;
            
                // Update the image preview div with the processed image
                $('#weedPreview').html(img);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

$(document).ready(function() {
    // Form submission
    $('#calc').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values from the number inputs
        var number1 = parseInt($('#number1').val());
        var number2 = parseInt($('#number2').val());

        // Send the numbers to the Flask route using AJAX
        $.ajax({
            url: '/calculated',
            type: 'POST',
            data: {
                'number1': number1,
                'number2': number2
            },
            success: function(response) {
                // Display the result
                $('#tassels').text('Tassels: ' + response.tassels);
                $('#maize1').text('Maize: ' + response.maize);
                $('#profit').text('Cost: R' + response.profit);
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    });
});
