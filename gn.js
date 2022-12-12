const wishList = [
  'когда тебя обнимаю, становится по особенному тепло',
  'у тебя такое приятное тело, к которому хочется прикасаться губами бесконечно, хочется зацеловать тебя всю',
  'мне очень нравится быть с тобой',
  'как ты вошла в мою жизнь, моя жизнь преобразилась максимально',
  'каждая секунда проведённого времени с тобой она бесценна',
  'скучаю и люблю тебя больше всего на свете',
  'люблю, целую тебя крепко крепко',
  'мне так приятно влюбляться в тебя снова и снова',
  'хочу бесконечно тебя обнимать',
  'встреча с тобой, лучшее что случалось со мной',
  'люблю тебя всем сердцем',
  'так приятно с тобой, ты такая нежная',
  'с тобой я каждую секунду счастлив',
  'я счастлив видеть тебя каждую секунду',
  'так скучаю, по твоему голосу, по тому как ты смеешься, или что то рассказываешь',
  'ты бесконечно интересная',
  'ты даришь столько эмоций',
  'не знаю как предать словами, как скучаю по тебе',
  'ты такая удивительная, каждый миг с тобой прекрасен, наполнен теплотой и любовью',
  'люблю тебя, не устану повторять тебе это',
  'ты самая необыкновенная девушка, которую я встречал',
  'ты лучшая, знай это, напомню тебе ещё много много раз',
  'мне нравится, быть с тобой безумно',
  'хочется каждый вечер находить тебя под одеялом',
  'ты самая лучшая',
  'хочется посмотреть на тебя, и поймав твой взгляд улыбнуться',
  'с тобой я чувствую себя по настоящему счастливым',
  'каждое твое прикосновение от него хочется оторваться от земли',
  'каждый твой взгляд в мою сторону делает меня счастливым вновь и вновь',
  'когда ты говоришь, что угодно, ты как будто обнимаешь, твой голос очень нежный, тёплый',
  'в моём сердце, место только для тебя',
];

const cuteName = [
  'Котик',
  'Киса',
  'Солнышко',
  'Солнце',
  'Зайка',
  'Милая',
  'Дорогая',
  'Любимая',
  'Золотце',
  'Сладкая',
];

const goodNight = ['доброй ночи', 'сладких снов', 'сладких сновидений'];

function getRandomWish(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

const buttonGN = document.querySelector('.form__button-GN');
const formText = document.querySelector('.form__text');
const buttonRandom = document.querySelector('#buttonRandom');
const buttonManual = document.querySelector('#buttonCustom');
const buttonThree = document.querySelector('#buttonThree');
const copyButton = document.getElementById('copyBtn');

const formRandom = document.querySelector('.form__random');
const formManual = document.querySelector('.form__manual');
const formThree = document.querySelector('.form__three');
const offerButton = document.querySelector('.form__button-offer');
const formInputOffer = document.querySelector('.form__offer');

const goodNightButtonManual = document.querySelector('.form__button-Manual');

function showWishRandom() {
  formRandom.querySelector('.form__text').textContent =
    getRandomWish(cuteName) +
    `, ` +
    getRandomWish(wishList) +
    `, ` +
    getRandomWish(goodNight);

  copyButton.classList.add('visible');
}

function showWishManual() {
  formManual.querySelector('.form__text').textContent =
    getRandomWish(cuteName) +
    `, ` +
    getRandomWish(wishList) +
    `, ` +
    getRandomWish(goodNight);
  formInputOffer.value = '';
}

buttonGN.addEventListener('click', showWishRandom);
goodNightButtonManual.addEventListener('click', showWishManual);

function showWishCutomName(event) {
  event.preventDefault();
  formManual.querySelector('.form__text').textContent =
    formInputOffer.value +
    `, ` +
    getRandomWish(wishList) +
    `, ` +
    getRandomWish(goodNight);
}

offerButton.addEventListener('click', showWishCutomName);

// buttonRandom.addEventListener('click', openForm(formRandom, formManual, formThree));
// buttonManual.addEventListener('click', openForm(formManual, formRandom, formThree))
// buttonThree.addEventListener('click', openForm(formThree, formRandom, formManual))
console.log(buttonManual);

buttonRandom.addEventListener('click', openFormRandom);
buttonManual.addEventListener('click', openFormManual);

function openFormRandom() {
  if (formManual.classList.contains('enable')) {
    formManual.classList.remove('enable');
    formManual.classList.add('disabled');
  }
  formRandom.classList.remove('disabled');
  formRandom.classList.add('enable');
}

function openFormManual() {
  if (formRandom.classList.contains('enable')) {
    formRandom.classList.remove('enable');
    formRandom.classList.add('disabled');
  }
  formManual.classList.remove('disabled');
  formManual.classList.add('enable');
}
function openFormThree() {
  if (formManual.classList.contains('enable')) {
    formManual.classList.remove('enable');
    formManual.classList.add('disabled');
  }
  formRandom.classList.remove('disabled');
  formRandom.classList.add('enable');
}

function copyText() {
  const str = formText.innerText;
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

copyButton.addEventListener('click', copyText);
