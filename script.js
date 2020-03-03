const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nxtBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearCardBtn = document.getElementById('clear');
const addContainer = document.getElementById('cards-container');

const currentActiveCard = 0;

const cardsEl = [];

const cardsData = [
  { question: 'What must a variable begin with?', answer: 'A letter, $ or _' },
  { question: 'What is a variable?', answer: 'A container for piece of data' },
  {
    question: 'What is React?',
    answer: 'A popular JS library for building user interfaces'
  }
];

function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `<div class="inner-card">
  <div class="inner-card-front">
    <p>${data.question}</p>
  </div>
  <div class="inner-card-back">
    <p>${data.answer}</p>
  </div>
</div>`;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
}

createCards();

function updateCurrentText() {
  currentEl.innerHTML = `${currentActiveCard + 1}/${cardsData.length}`;
}
