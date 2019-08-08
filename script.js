//makes icons larger when hovered over
$(document).ready(function() {
  $(".icon").hover(
    function() {
      $(this).css("transform", "scale(1.5)");
    },
    function() {
      $(this).css("transform", "scale(1)");
    }
  );
});

//pulls the names of my repos and lists them as bulleted links
function getInfo() {
  let getRepoInfo = new XMLHttpRequest();
  getRepoInfo.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let repoArray = JSON.parse(this.responseText);

      for (let i = 0; i < repoArray.length; i++) {
        console.log(repoArray[i].name);

        let ul = document.getElementById("myRepos");
        let li = document.createElement("li");
        let a = document.createElement("a");

        li.appendChild(document.createTextNode(repoArray[i].name));

        a.appendChild(li);
        a.setAttribute("href", repoArray[i].html_url);
        ul.appendChild(a);
      }
    }
  };

  getRepoInfo.open("GET", "https://api.github.com/users/gneview/repos", true);
  getRepoInfo.send();
}
