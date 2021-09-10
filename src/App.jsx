import React from "react";
import Family from "./components/Family";
import IDcard from "./components/IDcard";
import Name from "./components/name";
import PersonAge from "./components/PersonAge";
import SubmitBtn from "./components/SubmitBtn";

function App() {
  function checkForm(e) {
    e.preventDefault();
    if (!e.target.name.value) {
      document.getElementById("name").style.border = "1px solid red";
      document.getElementById("fillname").textContent =
        " Please enter your name...";
    } else {
      document.getElementById("name").style.border = "1px solid green";
      document.getElementById("fillname").textContent = "";
    }

    if (!e.target.family.value) {
      document.getElementById("family").style.border = "1px solid red";
      document.getElementById("fillfamily").textContent =
        " Please enter your family...";
    } else {
      document.getElementById("family").style.border = "1px solid green";
      document.getElementById("fillfamily").textContent = "";
    }

    if (e.target.idcard.value.length !== 10) {
      document.getElementById("idcard").style.border = "1px solid red";
      document.getElementById("fillcard").textContent =
        " You must enter ID-CARD right format";
    } else {
      document.getElementById("idcard").style.border = "1px solid green";
      document.getElementById("fillcard").textContent = "";
    }

    if (e.target.age.value < 18) {
      document.getElementById("age").style.border = "1px solid red";
      document.getElementById("fillage").textContent = " Your age is Wrong";
    } else {
      document.getElementById("age").style.border = "1px solid green";
      document.getElementById("fillage").textContent = "";
    }

    if (
      e.target.name.value &&
      e.target.family.value &&
      e.target.idcard.value.length === 10 &&
      e.target.age.value > 18
    ) {
      alert("Your Profile has been created.");
      setTimeout(function reloadPage() {
        location.reload();
      }, 1200);
    }
  }
  return (
    <div className="d-flex justify-content-center pt-5">
      <form onSubmit={checkForm}>
        <Name />
        <Family />
        <IDcard />
        <PersonAge />
        <SubmitBtn />
      </form>
    </div>
  );
}

export default App;
