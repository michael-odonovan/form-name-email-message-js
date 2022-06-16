function myFunction() {
  event.preventDefault();

  let nameData = document.querySelector('input[name="name"]').value
  let emailData = document.querySelector('input[name="email"]').value
  let messageData = document.querySelector('textarea').value

  console.log(messageData)
}
