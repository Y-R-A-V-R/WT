module.exports = {
  displayInfo: function(string) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    console.log(`Date: ${formattedDate}`);
    console.log(`Time: ${formattedTime}`);
    console.log(`Additional Information: ${string}`);
  }
};
module.exports = {
  displayInfo: function(string) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    console.log(`Date: ${formattedDate}`);
    console.log(`Time: ${formattedTime}`);
    console.log(`Additional Information: ${string}`);
  }
};
