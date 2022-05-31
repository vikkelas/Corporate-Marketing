const input = document.querySelectorAll('.contacts__form-input');

const creatError = (error, element) => {
  const input = document.querySelector(`#${element}`);
  const err = document.createElement('div');
  err.classList.add('order__error');
  err.innerText = error;
  input.insertAdjacentElement('afterend', err);
  setTimeout(() => err.remove(), 2000);
};

const validChange = () => {
  input.forEach((item) => {
    item.addEventListener('change', (e) => {
      e.preventDefault();
      if (e.target.getAttribute('name') === 'name') {
        const regName = /^\S([А-Яа-яA-Za-z \s]{2,20})$/gm.test(e.target.value);
        if (!regName) {
          creatError('Введите имя', 'name');
        }
      }
      if (e.target.getAttribute('name') === 'phone') {
        const reg = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(e.target.value);
        if (!reg) {
          creatError('Введите номер', 'phone');
        }
      }
      if (e.target.getAttribute('name') === 'email') {
        const reg = /\w@[\w\w][-_\w\d]+\.\w/.test(e.target.value);
        if (!reg) {
          creatError('Введите корректную почту', 'email');
        }
      }
    });
  });
};

const formValid = (formData) => {
  const name = formData.get('name');
  const tell = formData.get('phone');
  const mail = formData.get('email');
  const validTell = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(tell);
  const validName = /^\S([А-Яа-яA-Za-z \s]{2,20})$/gm.test(name);
  const validMail = /\w@[\w\w][-_\w\d]+\.\w/.test(mail);
  let indexValid = true;

  if (!validTell) {
    creatError('Не верно указан номер', 'phone');
    indexValid = false;
  }
  if (!validName) {
    creatError('Не верно указано имя', 'name');
    indexValid = false;
  }
  if (!validMail) {
    creatError('Не верно указана почта', 'email');
    indexValid = false;
  }
  return indexValid;
};

export {
  validChange,
  formValid,
};
