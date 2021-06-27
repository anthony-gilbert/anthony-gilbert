
<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="name">
    <label>Email</label>
    <input type="email" name="email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {


  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_mfwhmiy', 'template_rsoluck', e.target, 'user_xxN34oimmfOr9qeC0d3UU')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert(`Your email has been sent!`);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>



<style scoped>
* {box-sizing: border-box;}

.contact-form {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
