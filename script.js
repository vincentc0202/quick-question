// script.js

let noCount = 0;
// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayDuck();
        });
    } else if (option === 'no') {
        handleNoOption();
        scrollToBottom(); 
    } else {
        alert('Invalid option!');
    }
}
function handleNoOption() {
    noCount++;
    if (noCount === 1) {
        document.getElementById('no-button').innerText = 'You sure?'; 
    }
    if (noCount === 2) {
        document.getElementById('no-button').innerText = 'You for sure & positive??'; 
    }
    if (noCount === 3) {
        document.getElementById('no-button').innerText = 'Come on, give me a chance!!'; 
    }
    if (noCount === 4) {
        document.getElementById('no-button').innerText = 'Okay fine..'; 
    }
    if (noCount === 5) {
        document.getElementById('no-button').innerText = "But I swear I'd treat you right..."; 
    }
    if (noCount === 6) {
        document.getElementById('no-button').innerText = "HAHA sike no isn't an option!!"; 
    }
    if (noCount === 7) {
        document.getElementById('no-button').innerText = "You're stuck here with me!!!!"; 
    }
    if (noCount > 8) {
        document.getElementById('no-button').innerText = "Dude just press yes.."; 
    }
    if (noCount > 15) {
        endgamePage()
    }
    // Increase font size of "Yes" button by 2x
    var yesButton = document.getElementById('yes-button');
    var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    var newSize = parseFloat(currentFontSize) * 2;
    yesButton.style.fontSize = newSize + 'px';
}

function scrollToBottom() {
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }, 500); // Delay 0.5s
}

function endgamePage() {
    document.body.innerHTML = ''; // Clear the entire page

    var stubbornButton = document.createElement('button');
    stubbornButton.innerText = "You're THAT stubborn? Well guess we'll be here forever.";
    stubbornButton.classList.add('stubborn-button'); 

    document.body.appendChild(stubbornButton);
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#FF8A8A', '#FFA858', '#FFF484', '#9FE59A', '#76B5E0', '#A589E0', '#D28BCB'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 100); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 1000); // Flash colors for 1 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayDuck() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');

    var duckImage = new Image();
    duckImage.src = 'duck.gif';
    duckImage.alt = 'Duck';

    var congratsMessage = document.createElement('div');
    congratsMessage.innerText = "🎉 Congrats! You're now Vincent's Valentine! 🎉"
    congratsMessage.id = 'congrats-message';

    var messageElement = document.createElement('div');
    messageElement.innerText = "(Heh I knew you'd make the right choice, see you on the 14th! ❤️)";
    messageElement.id = 'valentine-message';

    duckImage.onload = function() {
        imageContainer.appendChild(congratsMessage);
        imageContainer.appendChild(duckImage);
        imageContainer.appendChild(messageElement)
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();