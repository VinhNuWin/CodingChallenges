// 7kyu-check-the-exam

const checkExam = (answers, responses) => {
  const score = responses.reduce((total, response, index) => {
    if (!response) return total;
    if (response === answers[index]) return total + 4;
    if (response !== answers[index]) return total - 1;

    return total;
  }, 0);

  return score > 0 ? score : 0;
};

// 8kyu-TrainingJS-#1:create-you-first-JS-function-and-print-HelloWorld

function helloWorld() {
  var str;
  console.log("Hello World!");
  ("Hello World!");
}
