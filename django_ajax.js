$(document).ready(function () {
  // First assign the "FORM" class to a variable.  We can keep this as a class to reuse for all forms that we want to use with ajax. Could use an id and do slightly different.
  const formSubmit = $(".form-product-ajax");

  // Whenever ANY form is selected we will prevent the default behavior of submit
  formSubmit.submit(function (event) {
    event.preventDefault(event);
    alert("Confirm that our form is not sending when liked button clicked");
    const selectedForm = $(this); // This line makes the form submitted the 'Active' form preventing the need to create a unique id for each form

    // From the form we want the endpoint, method and data for building ajax
    const actionEndpoint = selectedForm.attr("action");
    const formMethod = selectedForm.attr("method");
    // serialize method will take in all the fields from your models.py file for that "table"
    // Might need to add a data type to ajox
    const formData = selectedForm.serialize();
    // https://api.jquery.com/jquery.ajax/
    // I think we want to use dataType: html should return response as text string 
    $.ajax({
        url: actionEndpoint,
        method: formMethod,
        data: formData,  // might need to add datatype below
        dataType: html
        success: function(data){ // this be the data we want - will be html format
            console.log(`Success: ${data}`); // log html data to the console - Should be the individual data only 

            // -- add code to update the post that was liked, unliked, etc 
            // 
        },
        error: function(errorData){
            console.log(`Error in Ajax: ${errorData}`);
        }
    })
});
