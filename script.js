function myFunction() {
  event.preventDefault();

  let nameData = document.querySelector('input[name="name"]').value;
  let emailData = document.querySelector('input[name="email"]').value;
  let messageData = document.querySelector('textarea').value;

  document.getElementById('nameOutput').innerHTML = nameData;
  document.getElementById('emailOutput').innerHTML = emailData;
  document.getElementById('messageOutput').innerHTML = messageData

  console.log(messageData)
}
