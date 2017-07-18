let container = document.querySelector('.myInfo');
let bio = document.querySelector('.bio');
let pic = document.querySelector('.pic');

let request = new XMLHttpRequest();
request.addEventListener("load", displaymyInfo);
request.open('GET', 'https://api.github.com/users/tenvega');
request.send();

function displaymyInfo() {

  let data = JSON.parse(this.responseText);
  let list = '';
  let para = '';
  let picture = '';



  list += `<li><b>Name:</b>  ${data.name}</li>`;
  list += `<li><b>Github URL: <a href="${data.url}"" target="_blank"></b> tenvega</a></li>`;
  list += `<li><b>Location:</b>  ${data.location}</li>`;
  list += `<li><b>Company:</b>  ${data.company}</li>`;
  list += `<li><b>Website: <a href="${data.blog}" target="_blank"></b> linkedin</a></li>`;
  para += `<p>${data.bio}</p>`;
  picture += `<img src= "${data.avatar_url}">`;
  container.innerHTML = list;
  bio.innerHTML = para;
  pic.innerHTML = picture;

}
