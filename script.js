const button = document.querySelector('.submit');

function loginAlert() {
  const loginInput = document.querySelector('.login');
  const passwordInput = document.querySelector('.password');

  if (loginInput.value === '' && passwordInput.value === '') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', loginAlert);

const checkbox = document.getElementById('agreement');

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
checkbox.addEventListener('click', () => {
  if (checkbox !== null) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const casa = document.querySelector('#house');

const formFamily = () => {
  const familyRadio = document.querySelectorAll('.family input');
  const familyText = document.querySelectorAll('.family p');
  let familyChecked = '';
  for (let index = 0; index < familyRadio.length; index += 1) {
    if (familyRadio[index].checked === true) {
      familyChecked = `<p>Família: ${familyText[index].innerText}</p>`;
    }
  }
  return familyChecked;
};

const formSubject = () => {
  const subject = document.querySelectorAll('.subject');
  const subjectText = document.querySelectorAll('.subjectText');
  const subjectChecked = [];
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      subjectChecked.push(` ${subjectText[index].innerText}`);
    }
  }
  return `<p>Matérias: ${subjectChecked.toString(' ')}</p>`;
};

const formAssessments = () => {
  const assessments = document.querySelectorAll('.assessments');
  const assessmentsText = document.querySelectorAll('.assessmentsText');
  let assessmentsChecked = '';
  for (let index = 0; index < assessments.length; index += 1) {
    if (assessments[index].checked === true) {
      assessmentsChecked = `<p>Avaliação: ${assessmentsText[index].innerText}</p>`;
    }
  }
  return assessmentsChecked;
};

const profile = () => {
  let dados = '';
  const formProfile = {
    Nome: `${document.querySelector('#input-name').value} ${
      document.querySelector('#input-lastname').value} `,
    Email: document.querySelector('#input-email').value,
    Casa: casa.options[casa.selectedIndex].text,
  };
  for (let index = 0; index < Object.keys(formProfile).length; index += 1) {
    if (dados === '') {
      dados = `<p>${Object.keys(formProfile)[index]}: ${Object.values(formProfile)[index]}</p>`;
    } else {
      dados += `<p>${Object.keys(formProfile)[index]}: ${Object.values(formProfile)[index]}</p>`;
    }
  }
  return dados;
};

const forms = document.querySelector('#evaluation-form');
submitBtn.addEventListener('click', (event) => {
  const textarea = document.querySelector('textarea').value;
  forms.innerHTML = `${profile()} ${formFamily()} ${formSubject()} ${formAssessments()}`;
  forms.innerHTML += (`<p>Observações: ${textarea}<p>`);
  event.preventDefault();
});
