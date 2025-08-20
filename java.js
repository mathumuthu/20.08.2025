function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function filterBlog() {
  const input = document.getElementById("blogSearch");
  const filter = input.value.toLowerCase();
  const list = document.getElementById("blogList").getElementsByTagName("li");
  for (let i = 0; i < list.length; i++) {
    const txt = list[i].textContent || list[i].innerText;
    list[i].style.display = txt.toLowerCase().includes(filter) ? "" : "none";
  }
}
