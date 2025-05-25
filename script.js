// Array of qualities to display
const qualities = [
    "Your smile brightens my day",
    "Your kindness knows no bounds",
    "You're the most caring person I know",
    "Your strength inspires me",
    "You make me feel safe and loved",
    "Your intelligence amazes me",
    "You're my best friend and partner",
    "Your dedication is admirable",
    "You're incredibly handsome",
    "Your sense of humor is perfect"
];

// Function to create and display quality text
function createQualityText(text, container, isLeft) {
    const qualityElement = document.createElement('div');
    qualityElement.className = 'quality-text';
    qualityElement.textContent = text;
    container.appendChild(qualityElement);
    
    // Random position within the container
    const containerHeight = container.offsetHeight;
    const randomTop = Math.random() * (containerHeight - 100);
    qualityElement.style.top = `${randomTop}px`;
    
    // Random delay for animation
    const randomDelay = Math.random() * 2000;
    setTimeout(() => {
        qualityElement.classList.add('visible');
    }, randomDelay);
}


// Function to initialize qualities section
function initializeQualities() {
    const leftContainer = document.querySelector('.left-qualities');
    const rightContainer = document.querySelector('.right-qualities');

    // Clear existing qualities to avoid duplication
    leftContainer.innerHTML = '';
    rightContainer.innerHTML = '';

    // Use unique qualities
    const uniqueQualities = [...new Set(qualities)];

    // Shuffle qualities array
    const shuffledQualities = [...uniqueQualities].sort(() => Math.random() - 0.5);

    // Split qualities between left and right containers
    const halfLength = Math.ceil(shuffledQualities.length / 2);
    const leftQualities = shuffledQualities.slice(0, halfLength);
    const rightQualities = shuffledQualities.slice(halfLength);

    // Create quality elements
    leftQualities.forEach(quality => {
        createQualityText(quality, leftContainer, true);
    });

    rightQualities.forEach(quality => {
        createQualityText(quality, rightContainer, false);
    });
}


// Function to create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}  

// Birthday Animation Functions
function createPartyPopper(x, y) {
    const popper = document.createElement('div');
    popper.className = 'party-popper';
    popper.style.left = `${x}px`;
    popper.style.top = `${y}px`;
    document.querySelector('.party-poppers').appendChild(popper);
    
    setTimeout(() => {
        popper.remove();
    }, 1000);
}

function startBirthdayAnimation() {
    const animation = document.querySelector('.birthday-animation');
    const avatars = document.querySelectorAll('.avatar');
    const loveMessage = document.querySelector('.love-message');
    const music = document.getElementById('birthday-music');

    // Show animation
    animation.style.display = 'flex';

    // Play music (keep it playing if already started)
    if (music.paused) {
        music.play();
    }
    

    // Make avatars dance
    avatars.forEach(avatar => {
        avatar.style.animation = 'dance 1s infinite';
    });

    // Create party poppers
    const popperInterval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createPartyPopper(x, y);
    }, 200);

    // Create floating hearts
    const heartInterval = setInterval(() => {
        createFloatingHeart();
    }, 300);

    // Show love message after 3 seconds
    setTimeout(() => {
        loveMessage.textContent = 'I Love You!';
        loveMessage.style.animation = 'type 2s forwards';
    }, 3000);

    // Stop animation after 10 seconds — BUT do NOT stop music
    setTimeout(() => {
        clearInterval(popperInterval);
        clearInterval(heartInterval);
        animation.style.display = 'none';
        avatars.forEach(avatar => {
            avatar.style.animation = '';
        });

        // ❌ Remove these two lines to keep music playing
        // music.pause();
        // music.currentTime = 0;

    }, 10000);
}

// Intersection Observer for section animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeQualities();
    
    // Add birthday button click handler
    const birthdayButton = document.querySelector('.birthday-button');
    birthdayButton.addEventListener('click', startBirthdayAnimation);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 


document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('birthday-music');
    const mainArea = document.getElementById('main-container');

    // Desktop single click - play
    window.addEventListener('click', () => {
        if (music.paused) music.play();
    });

    // Desktop double click - stop
    window.addEventListener('dblclick', () => {
        if (!music.paused) {
            music.pause();
            music.currentTime = 0;
        }
    });

    // Mobile double-tap
    let lastTap = 0;
    mainArea.addEventListener('touchend', function (e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            // Detected double-tap
            if (!music.paused) {
                music.pause();
                music.currentTime = 0;
            }
        }
        lastTap = currentTime;
    });
});
 
function changeReadMore() {
    const mycontent = document.getElementById('mybox1id');
    const mybutton = document.getElementById('mybuttonid');
    const span1 = document.getElementById("span1");

    if (mycontent.style.display === 'none' || mycontent.style.display === '') {
        mycontent.style.display = 'inline';
        span1.style.display = "none";
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
        span1.style.display = "inline";
    }
}

function changeReadMore1() {
    var content = document.getElementById("mybox1id1");
    var button = document.getElementById("mybuttonid1");
    var dots = document.getElementById("span2");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        dots.style.display = "none";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        dots.style.display = "inline";
        button.textContent = "Read More";
    }
}

//Song
document.addEventListener('DOMContentLoaded', () => {
    initializeQualities();

    const music = document.getElementById('birthday-music');
    const birthdayButton = document.querySelector('.birthday-button');

    // Single click - play music
    window.addEventListener('click', () => {
        if (music.paused) {
            music.play();
        }
    });

    // Double click - stop music
    window.addEventListener('dblclick', () => {
        if (!music.paused) {
            music.pause();
            music.currentTime = 0;
        }
    });

    // Birthday button click starts animation
    birthdayButton.addEventListener('click', startBirthdayAnimation);

    // Observe section animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

