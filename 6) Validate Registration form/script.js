function validateForm() {
    let valid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('name_error').innerHTML = 'Please enter your name';
        document.getElementById('name_error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name_error').style.display = 'none';
    }

    // Validate Course
    const course = document.getElementById('course').value;
    if (course === '') {
        document.getElementById('course_error').innerHTML = 'Please select a course';
        document.getElementById('course_error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('course_error').style.display = 'none';
    }

    // Add validation for other fields

    return valid;
}
