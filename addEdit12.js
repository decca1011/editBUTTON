function test() {
  //retrivewing data
  var uid = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;
  var eml = document.getElementById("email").value;

  alert(uid + pwd + eml);
  // storing data

  var user = localStorage.setItem("uid", uid);
  var pass = localStorage.setItem("pwd", pwd);
  var em = localStorage.setItem("eml", eml);

  
  // retreiving stored data and using it for calculation
  var user = localStorage.getItem("uid");
  var pass = localStorage.getItem("pwd");
  var em = localStorage.getItem("eml");
 
  var myObj = {
    name: user,
    pass: pass,
    em: em,
  };
 
  let myObj_serialized = JSON.stringify(myObj);
  
  localStorage.setItem("myObj", myObj_serialized);

  let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

  console.log(myObj_deserialized);

  getOnscreen();
}

function getOnscreen() {
  var x = document.createElement("LI");

  var getElement =
    "Name => " +
    localStorage.getItem("uid") +
    ",   " +
    "e-mail => " +
    localStorage.getItem("eml") +
    " ,    " +
    "  pwd => " +
    localStorage.getItem("pwd");

  var t = document.createTextNode(getElement);
  x.appendChild(t);

  var w = document.getElementById("myList");

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.onclick = () => {
    localStorage.removeItem(t);
    w.removeChild(x);
  };
  x.appendChild(deleteButton);
  w.appendChild(x);

  const editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "Edit";
  editButton.addEventListener("click", () => editClickHandler(t, x, w));
  x.appendChild(editButton);
  w.appendChild(x);
}

const editClickHandler = (t, x, w) => {
  w.removeChild(x);
 
  
  document.getElementById("username").value = localStorage.getItem("uid");
  document.getElementById("email").value = localStorage.getItem("eml");
  document.getElementById("password").value = localStorage.getItem("pwd");

  localStorage.removeItem(t);
};
