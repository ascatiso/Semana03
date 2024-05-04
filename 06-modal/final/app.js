// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

document.addEventListener("DOMContentLoaded", function () {
  const modalBtns = document.querySelectorAll(".modal-btn");
  const closeBtns = document.querySelectorAll(".close-btn");

  modalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.classList.add("open-modal");
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = btn.closest(".modal-overlay");
      modal.classList.remove("open-modal");
    });
  });
});