document.getElementById("contact").addEventListener("click", (e) => {
  if (e.target.closest("a")) return;
  e.currentTarget.classList.toggle("open");
});
