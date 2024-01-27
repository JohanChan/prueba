function index() {
    var currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    var formattedDate = currentDate.toISOString().slice(0, 4);
    currentDateElement.textContent = "© " + formattedDate + " Optimum Star.";
}


index();
//setInterval(createSnowFlake, 200);


const body = document.querySelector('body');
function createSnowFlake() {
    console.log("Hola mundo")
	// Creating the <i> tag
	const snow_flake = document.createElement('i');
	// Adding the required classes for the FontAwesome icon to show up
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');

	// Randomly generate the width to be between 10 and 20 px
	snow_flake.style.width = Math.random() * 10 + 10 + 'px';

	// Randomly generate the left position to be between 0 and the innerWidth of the screen
	snow_flake.style.left = Math.random() * window.innerWidth - 60 + 'px';

	// Randomly generate the animationDuration - between 2 and 5 seconds
	snow_flake.style.animationDuration = Math.random() * 5 + 8 +'s';

	// Randomly add an opacity - between 0 and 1
	snow_flake.style.opacity = Math.random();

	// Add the newly created <i> tag inside the <body> tag
	body.appendChild(snow_flake);

	// Set a timeout to remove the snow_flake from the DOM after 5 seconds
	// as we don't want it to overload the page
	setTimeout(() => {
		snow_flake.remove();
	}, 8000);
}

document.addEventListener('DOMContentLoaded', function () {
    const numberOfSnowflakes = 20;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        console.log("Hola mundo")
      createSnowflake();
    }

    function createSnowflake() {
      const snowflakeContainer = document.querySelector('.snowflake-container');
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflakeContainer.appendChild(snowflake);

      const startPositionX = Math.random() * window.innerWidth;
      const animationDuration = Math.random() * 3 + 2; // between 2 and 5 seconds

      snowflake.style.left = `${startPositionX}px`;
      snowflake.style.animationDuration = `${animationDuration}s`;

      // Remove the snowflake when it reaches the bottom
      snowflake.addEventListener('animationiteration', function () {
        snowflakeContainer.removeChild(snowflake);
        createSnowflake();
      });
    }
  });
