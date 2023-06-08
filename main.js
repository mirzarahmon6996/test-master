const form = document.querySelector(".quiz-form");
const finish = document.querySelector(".finish");
const result = [
  "B",
  "A",
  "B",
  "A",
  "B",
  "A",
  "A",
  "B",
  "A",
  "A",
  "B",
  "A",
  "B",
  "A",
  "A",
  "A",
  "B",
  "A",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = [
    e.target.q1.value,
    e.target.q2.valuee,
    e.target.q3.valuee,
    e.target.q4.value,
    e.target.q5.value,
    e.target.q6.value,
    e.target.q7.value,
    e.target.q8.value,
    e.target.q9.value,
    e.target.q10.value,
    e.target.q11.value,
    e.target.q12.value,
    e.target.q13.value,
    e.target.q14.value,
    e.target.q15.value,
    e.target.q16.value,
    e.target.q17.value,
    e.target.q18.value,
  ];
  let score = 0;
  input.forEach((answer, index) => {
    if (answer === result[index]) {
      score += 6.2;
    }
  });
  scrollTo(0, 0);
  finish.classList.remove("d-none");

  let counter = 0;
  let timer = setInterval(() => {
    finish.querySelector("span").textContent = `${counter}%`;
    if (counter > score) {
      clearInterval(timer);
    } else {
      counter++;
    }
  }, 50);
});
