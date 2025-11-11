document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".product-card button:nth-child(2)");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Product Deleted!");
    });
  });
});
