const firebaseConfig = {
  apiKey: "AIzaSyDAJK0skFTg_YDWhzWcfhx3samTjX5aodk",
  authDomain: "contactform-b02af.firebaseapp.com",
  databaseURL:
    "https://contactform-b02af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contactform-b02af",
  storageBucket: "contactform-b02af.appspot.com",
  messagingSenderId: "830147653529",
  appId: "1:830147653529:web:531623acd69a47c5226d08",
};
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactform");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var subject = getElementVal("subject");
  var msgContent = getElementVal("msgContent");

  // saveMessages(name, emailid, subject, msgContent);
  console.log(name, emailid, subject, msgContent);
  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  //   reset the form
  document.getElementById("contactForm").reset();
}
function getElementVal(id) {
  return document.getElementById(id).value;
}

function saveMessages(name, emailid, subject, msgContent) {
  var newContactform = contactFormDB.push();

  newContactform.set({
    name: name,
    emailid: emailid,
    subject: subject,
    msgContent: msgContent,
  });
}
