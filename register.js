/*Fasilitates the animation of the log/signIn page.*/

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const containerButton = document.getElementById('container');

signUpButton.addEventlistener('click', () => {
   container.classlist.add("right-panel-active");
});

signInButton.addEventlistener('click', () => {
   container.classlist.remove("right-panel-active");
});