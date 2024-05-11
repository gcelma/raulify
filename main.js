document.getElementById("btn").addEventListener("click", () => {
  switch (btn.className) {
    case "red":
      return (btn.className = "green");
    case "green":
      return (btn.className = "red");
  }
});
