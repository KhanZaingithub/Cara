async function loginCeck() {
    let a = await fetch("cara/login/login.json");
    let response = await a.text();
    const data = JSON.parse(response);
    let loginDiv = document.querySelector("#login");
    let profileDiv = document.querySelector("#header .navbar .profile");
    let profileName = document.getElementById("profile-name");
    let index = localStorage.getItem("index");
    console.log(loginDiv)
    if (index != null) {
      loginDiv.style.display = "none";
      profileDiv.style.display = "flex";
      profileName.textContent = data[index].name;
    } else {
      loginDiv.style.display = "block";
      profileDiv.style.display = "none";
    }
    Logout();
  }
  
  function Logout() {
    let btn = document.getElementById("logout");
    btn.addEventListener("click", (event) => {
      localStorage.removeItem("index");
    });
  }
  
  loginCeck();