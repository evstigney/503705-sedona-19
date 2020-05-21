'use strict';

const reviewForm = document.querySelector(`.review-form`);
const modalSuccess = document.querySelector(`.modal--success`);
const modalFailure = document.querySelector(`.modal--failure`);
const buttonModalSuccess = modalSuccess.querySelector(`.button`);
const buttonModalFailure = modalFailure.querySelector(`.button`);
const buttonSubmit = reviewForm.querySelector(`.review-form__button`);
const requiredFields = Array.from(reviewForm.querySelectorAll(`.review-form__field`))
                        .filter((field) => field.hasAttribute(`required`));

const checkField = (field) => {
  if (field.value) {
    field.classList.remove(`invalid-field`);
  } else {
    field.classList.add(`invalid-field`);
  }
};

const showModal = (modalWindow) => {
  modalWindow.style.display = `flex`;
};

const hideModal = (modalWindow) => {
  modalWindow.style.display = `none`;
};

requiredFields.forEach((field) => {
  field.addEventListener(`blur`, () => {
    checkField(field);
  })
});

buttonSubmit.addEventListener(`click`, (evt) => {
  requiredFields.forEach((field) => checkField(field));
  if (requiredFields.some((field) => field.classList.contains(`invalid-field`))) {
    showModal(modalFailure);
  } else {
    showModal(modalSuccess);
  }
  evt.preventDefault();
});

buttonModalSuccess.addEventListener(`click`, () => {
  hideModal(modalSuccess);
});

buttonModalFailure.addEventListener(`click`, () => {
  hideModal(modalFailure);
});
