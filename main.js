let apiArray = [];  
  for(let i = 1; i < 5; i++){
    let response = fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => apiArray.push(data));
    console.log(response)
    return apiArray
  }
  console.log(apiArray)

  const logArray = () => {
    console.log(apiArray)
}
const listUsers() {
    arrayOfUsers.forEach((user) =>{
        let li = document.createElement("li")
        let name = user.name.first + " " + user.name.last
        li.innerText = name
        unorderedList.appendChild(li)

        let face = document.createElement("img")
        unorderedList.appendChild(face)
    

        const getFirstUsers() {
            fetch("https://randomuser.me/api/?results=5")
            .then(res => res.json())
            .then(data => data.results.forEach(result => arrayOfUsers.push(result)))
        }
window.onload(listUsers());
window.onload(arrayOfUsers());