//Registration form input check

// const input = document.querySelector("input");

// input.addEventListener("input", evt => {
//   const TextFields = input.value.trim();

//   if (TextFields) {
//     input.dataset.state = "valid";
//   } else {
//     input.dataset.state = "invalid";
//   }
// });

// Submit completed form

const $form = $("#registrationform");
url =
  "https://script.google.com/macros/s/AKfycbzFr4guMnXKOOdclhcnZy4izKzQtHuP75UNUG1ASwI4m4ao9po/exec";
$("#submit-button").on("click", function(e) {
  e.preventDefault();
  $form.ready();
  formSubmit();
});

function formSubmit() {
  const firstName = $("#first_name").val();
  const lastInitial = $("#last_initial").val();
  const email = $("#email").val();

  if (firstName != "" && lastInitial != "" && email != "") {
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize(),
      success: function(response) {
        alert("Your registration has been recieved. Thank you!");
        $form[0].reset();
      }
    });
  }
  return true;
}
