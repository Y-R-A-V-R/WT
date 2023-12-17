function calculateGrade() {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const marks1 = parseFloat(document.getElementById('marks1').value);
  const marks2 = parseFloat(document.getElementById('marks2').value);
  const marks3 = parseFloat(document.getElementById('marks3').value);

  // Calculate total marks and percentage
  const totalMarks = marks1 + marks2 + marks3;
  const percentage = totalMarks / 300 * 100;

  // Determine grade based on percentage
  let grade;
  if (percentage >= 90) {
      grade = 'A';
  } else if (percentage >= 80) {
      grade = 'B';
  } else if (percentage >= 70) {
      grade = 'C';
  } else if (percentage >= 60) {
      grade = 'D';
  } else {
      grade = 'F';
  }

  // Display results
  document.getElementById('percentage').innerText = percentage.toFixed(2);
  document.getElementById('grade').innerText = grade;
  document.getElementById('result').style.display = 'block';
}
