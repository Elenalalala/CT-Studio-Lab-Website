function drop() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      // console.log("closed")
    } else {
      x.style.display = "block";
      // console.log("open")
    }
  }