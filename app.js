const userPicture = document.querySelector(".card-img-top"); 
const userfirstname = document.querySelector(".firstName"); 
const userlastname = document.querySelector(".lastName"); 
const userPhone = document.querySelector(".phone"); 
const userEmail = document.querySelector(".email"); 
const userCountry = document.querySelector(".country"); 
const userUsername = document.querySelector(".username"); 
const userIdsi = document.querySelector(".idsi"); 
const userGenerate = document.querySelector(".btn"); 

window.onload = () => {
  datacek()
}

userGenerate.addEventListener("click", () => {
  const datacek = () => {
    fetch("https://randomuser.me/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Something went wrong: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => gitUserData(data))
      .catch((err) => console.log(err));
  };
  datacek();
});



  const gitUserData = (data) => {
    // console.log(data);
    userPicture.src = data.results[0].picture.medium
    userfirstname.innerText = `Name : ${data.results[0].name.first}`
    userlastname.innerText =`${data.results[0].name.last}` ;
    userPhone.innerText = `Phone : ${data.results[0].phone}`
    userEmail.innerText = `e-mal : ${data.results[0].email}`
    userCountry.innerText = `Country : ${data.results[0].location.country}`
    userUsername.innerText =`Username : ${data.results[0].login.username}` 
    userIdsi.innerText =`Id : ${data.results[0].id.value}` 
  };
