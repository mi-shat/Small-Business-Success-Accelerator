const phaseButtons = document.querySelectorAll(".phase-tab");
const courseCards = document.querySelectorAll(".course-card");
const packageInput = document.querySelector("#selected-package");
const packageButtons = document.querySelectorAll("[data-package]");
const consultationForm = document.querySelector(".consult-form");
const formNote = document.querySelector(".form-note");

phaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const phase = button.dataset.phase;

    phaseButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    courseCards.forEach((card) => {
      const shouldShow = phase === "all" || card.dataset.phase === phase;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    packageInput.value = button.dataset.package;
    document.querySelector("#advisor").scrollIntoView({ behavior: "smooth" });
  });
});

consultationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Thanks. Your consultation request is ready to connect to a booking or CRM tool.";
});
