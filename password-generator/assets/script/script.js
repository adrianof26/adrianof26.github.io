const slider = document.querySelector('input[type=range]');
const sliderValue = document.querySelector('.value');
const form = document.querySelector('form');
const generateBtn = document.querySelector('button');
const constraints = document.getElementsByName('options');
const output = document.querySelector('.result__text-field');
const copyIcon = document.querySelector('.password-generator__result > img')
const copyText = document.querySelector('.copied');
const passwordState = document.querySelector('.password-strength__state')
const passwordStrength = document.querySelector('#password-strength')
const closedEye = document.querySelector('.closedEye');

const passwordInput = document.querySelector('.result__text-field');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerCase = "abcdefghijklmnopqrstuvxyz";
const numbers = "0123456789";
const specialChars = "£$&()*+[]@#^-_!?";

sliderValue.textContent = slider.value;

form.addEventListener('change', () => {
  sliderValue.textContent = slider.value;
});

const options = () => {
  const opt = []
  if (constraints[0].checked) opt.push(upperCase)
  if (constraints[1].checked) opt.push(lowerCase)
  if (constraints[2].checked) opt.push(numbers)
  if (constraints[3].checked) opt.push(specialChars)

  return opt;
}

const generatePassword = () => {
  const passwordOptions = options();
  const passwordLength = slider.value;
  let charCategories = passwordOptions.length;

  let password = "";

  if (!charCategories) return "";

  for (let i  = 0; i < passwordLength; i++) {
    let category = passwordOptions[Math.floor(Math.random() * charCategories)]
    let char = category[Math.floor(Math.random() * category.length)]

    password += char;
  }

  output.value = password;
  return password;
}

const estimateStrength = (password) => {
  let score = 0;
  if (constraints[0].checked) score++;
  if (constraints[1].checked) score++;
  if (constraints[2].checked) score++;
  if (constraints[3].checked) score++;

  if (score <= 1) {
    passwordState.textContent = 'too weak!'
    passwordStrength.className = 'too-weak'
  } else if (score === 2) {
    passwordState.textContent = 'weak'
    passwordStrength.className = 'weak'
  } else if (score === 3) {
    passwordState.textContent = 'medium'
    passwordStrength.className = 'medium'
  } else {
    passwordState.textContent = 'strong'
    passwordStrength.className = 'strong'
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(output.value);
    copyText.classList.add('animate');
    setTimeout(() => {
      copyText.classList.remove('animate')
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

generateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let password = generatePassword();
  if (password) estimateStrength(password);
});

copyIcon.addEventListener('click', copyToClipboard);

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '10' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

closedEye.addEventListener('click', () => {
  // Toggle password visibility
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
