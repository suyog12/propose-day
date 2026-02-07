
const PHOTO_PATHS = {
    photo1: 'assets/images/photo1.jpeg',  // Q1: Aanandabilas
    photo2: 'assets/images/photo2.jpeg',  // Q2: Before this photo - Sexxx
    photo3: 'assets/images/photo3.jpeg',  // Q3: Meraki
    photo4: 'assets/images/photo4.jpeg',  // Q4: Ginnie
    photo5: 'assets/images/photo5.jpeg'   // Q5: Didi Bahini Sekuwa
};

// TODO: Replace with your own video path
const VIDEO_PATH = 'assets/videos/romantic.mp4';

// TODO: Optional - Add your own music for the proposal
const MUSIC_PATH = 'audio/our-song.mp3'; // or null if no music

const questions = [
    // --- PHOTO QUESTIONS 1-5 ---
    {
        // Q1 - Aanandabilas
        image: PHOTO_PATHS.photo1,
        text: "Where were we when this photo was taken?",
        options: [
            "Raithane", 
            "Meraki", 
            "Aanandabilas",  // Correct - Index 2
            "Tokyo"
        ],
        correct: 2,
        feedback: [
            "Close, but not quite! 😏",
            "We love Meraki, but not this time!",
            "Sauna in the morning 🏠❤️",  // Correct
            "I wish! Maybe someday ✈️"
        ]
    },
    {
        // Q2 - 9841
        image: PHOTO_PATHS.photo2,
        text: "What song did I put in my story for this photo?",
        options: [
            "Timro Mood",
            "Tick Tack Toe",
            "9841",  // Correct - Index 2
            "Bardali"
        ],
        correct: 2,
        feedback: [
            "Thought about it but no 😇",
            "This song just released baabae 😉",
            "Ainch...🔥",  // Correct
            "Bihe ma bajamlai 😂"
        ]
    },
    {
        // Q3 - Meraki
        image: PHOTO_PATHS.photo3,
        text: "Where were we when this photo was taken?",
        options: [
            "Raithane", 
            "Meraki",  // Correct - Index 1
            "Aanandabilas", 
            "Tokyo"
        ],
        correct: 1,
        feedback: [
            "Good guess, but no!",
            "Yes! We were relaxed 🏠❤️",  // Correct
            "That was the previous question!",
            "Still not in Japan 😄"
        ]
    },
    {
        // Q4 - Ginnie
        image: PHOTO_PATHS.photo4,
        text: "Who is the third person in this photo?",
        options: [
            "Ginnie",  // Correct - Index 0
            "KP Oli",
            "Visa Officer",
            "AC Maintenance"
        ],
        correct: 0,
        feedback: [
            "Yes! Our Baby 🐾❤️",  // Correct
            "Wrong! 😂",
            "That was a different stressful day!",
            "We are too cool to have an AC!"
        ]
    },
    {
        // Q5 - Didi Bahini Sekuwa
        image: PHOTO_PATHS.photo5,
        text: "This is where our first photo was taken. Where did we take it?",
        options: [
            "Gulfutar Sekuwa",
            "Didi Bahini Sekuwa",  // Correct - Index 1
            "This is not our first picture together",
            "Somalia"
        ],
        correct: 1,
        feedback: [
            "Close, but wrong sekuwa place!",
            "Yes! Where it all began 🍢❤️",  // Correct
            "It definitely IS our first photo!",
            "Somalia?! Really?! 😂"
        ]
    },

    // --- TEXT-ONLY QUESTIONS 6-10 ---
    {
        // Q6 - Mandapgiri
        text: "Where is our favorite place to dine out in Nagarkot?",
        options: [
            "Mandapgiri",  // Correct - Index 0
            "Chautari",
            "We don't eat",
            "Cook ourselves"
        ],
        correct: 0,
        feedback: [
            "Yes! Best thupka🏔️🍽️",  // Correct
            "We stay here, but not for food iykyk!",
            "We definitely eat! A lot!",
            "When are you going to cook for me huh?"
        ]
    },
    {
        // Q7 - Daha Gaun jane bato
        text: "Where is our spot?",
        options: [
            "Boudha",
            "Budhanilkantha",
            "Dadha Gaun jane bato",  // Correct - Index 2
            "Hangout Reel"
        ],
        correct: 2,
        feedback: [
            "Peaceful, but not OUR spot",
            "Close, but no",
            "Yes! Our not so secret spot 🛣️💕",  // Correct
            "Really?"
        ]
    },
    {
        // Q8 - Cafe Tara
        text: "Where were you staying during my Visa interview?",
        options: [
            "Cafe Tara",  // Correct - Index 0
            "Roadhouse",
            "Blue Lotus Cafe",
            "Timalsina didi ko chiya pasal"
        ],
        correct: 0,
        feedback: [
            "Yes! ☕😰",  // Correct
            "Too fancy for that stress!",
            "Wrong cafe!",
            "Heh!"
        ]
    },
    {
        // Q9 - Hangout Reel
        text: "Where was our go to place after my office?",
        options: [
            "Terrys",
            "Hangout Reel",  // Correct - Index 1
            "Chobar",
            "Nagarkot"
        ],
        correct: 1,
        feedback: [
            "Sometimes, but not the GO-TO",
            "Yes! Our evening ritual 🌆🍻",  // Correct
            "Too far for daily visits",
            "Weekends only!"
        ]
    },
    {
        // Q10 - Youuuuuu
        text: "What am I thinking about right now?",
        options: [
            "Optimization",
            "Coding",
            "Youuuuuu",  // Correct - Index 2
            "Coffee"
        ],
        correct: 2,
        feedback: [
            "Taat!",
            "Bugs can wait too!",
            "Always YOU ❤️❤️❤️",  // Correct
            "Maybe after you!"
        ]
    }
];


let currentQIndex = 0;
let score = 0;
let isAnswering = false;


// Generate floating background hearts
document.addEventListener('DOMContentLoaded', () => {
    const bgContainer = document.getElementById('bgHearts');
    for(let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        bgContainer.appendChild(heart);
    }
});


function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startQuiz() {
    currentQIndex = 0;
    score = 0;
    showSection('quiz');
    renderQuestion();
}

function showVideo() {
    showSection('videoSection');
    const video = document.getElementById('romanticVideo');
    // Try to autoplay (may be blocked by browser without user interaction)
    video.play().catch(e => {
        console.log("Autoplay blocked - user needs to press play");
    });
}

function showProposal() {
    showSection('proposal');
    initNoButton();
}


function renderQuestion() {
    const q = questions[currentQIndex];
    const progressContainer = document.getElementById('progressHearts');
    const counter = document.getElementById('questionCounter');
    const imgContainer = document.getElementById('imageContainer');
    const qImage = document.getElementById('qImage');
    const qText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const feedback = document.getElementById('feedbackText');

    // Reset UI
    feedback.textContent = '';
    optionsGrid.innerHTML = '';
    isAnswering = true;

    // Update progress hearts
    progressContainer.innerHTML = '';
    for(let i = 0; i < 10; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart-icon';
        heart.innerHTML = '♥';
        if(i <= currentQIndex) heart.classList.add('filled');
        progressContainer.appendChild(heart);
    }

    // Update counter
    counter.textContent = `Question ${currentQIndex + 1} of 10`;

    // Handle image (Questions 1-5)
    if(q.image) {
        imgContainer.classList.remove('hidden');
        qImage.src = q.image;
        qImage.classList.remove('revealed'); // Start blurred
        // Add error handling for missing images
        qImage.onerror = () => {
            console.error(`Failed to load image: ${q.image}`);
            qImage.alt = "Image not found - check assets/images/ folder";
        };
    } else {
        imgContainer.classList.add('hidden');
    }

    // Update question text
    qText.textContent = q.text;

    // Create option buttons
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx);
        optionsGrid.appendChild(btn);
    });
}

function handleAnswer(selectedIndex) {
    if(!isAnswering) return;
    isAnswering = false;

    const q = questions[currentQIndex];
    const feedback = document.getElementById('feedbackText');
    const btns = document.querySelectorAll('.option-btn');

    // Visual feedback
    btns[selectedIndex].style.borderColor = 'var(--primary)';
    btns[selectedIndex].style.background = '#ffccd5';

    // Check answer
    if(selectedIndex === q.correct) {
        score += 10;
        feedback.textContent = q.feedback[selectedIndex];
        feedback.style.color = '#2e7d32'; // Green for correct
    } else {
        feedback.textContent = q.feedback[selectedIndex];
        feedback.style.color = '#c9184a'; // Red for wrong
    }

    // Next question delay
    setTimeout(() => {
        currentQIndex++;
        if(currentQIndex < questions.length) {
            renderQuestion();
        } else {
            showScore();
        }
    }, 1500);
}

function showScore() {
    showSection('scoreReveal');
    const display = document.getElementById('scoreDisplay');
    const msg = document.getElementById('scoreMessage');
    let current = 0;
    
    // Animate score counting
    const interval = setInterval(() => {
        if(current >= score) {
            clearInterval(interval);
            // Final message based on score
            if(score >= 80) {
                msg.textContent = "Okay… soulmate confirmed 💍";
            } else if(score >= 50) {
                msg.textContent = "Not bad 😌 Still my Valentine material";
            } else {
                msg.textContent = "We need more dates ASAP ❤️";
            }
        } else {
            current++;
            display.textContent = current;
        }
    }, 50);
}

function initNoButton() {
    const noBtn = document.getElementById('noBtn');
    const teaseMsg = document.getElementById('teaseMsg');
    const messages = [
        "Nice try 😌", 
        "That's illegal", 
        "Nope", 
        "You can't say no", 
        "Try again", 
        "Wrong button!",
        "Not happening",
        "Error 404: No not found"
    ];
    
    // Desktop hover
    noBtn.addEventListener('mouseenter', moveButton);
    
    // Mobile touch
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });
    
    // Also move on click attempt
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
    });

    function moveButton() {
        // Calculate random position (keep within viewport)
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        const maxX = window.innerWidth - btnWidth - 20;
        const maxY = window.innerHeight - btnHeight - 20;
        
        const x = Math.random() * maxX + 10;
        const y = Math.random() * maxY + 10;
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        noBtn.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

        // Show tease message
        teaseMsg.textContent = messages[Math.floor(Math.random() * messages.length)];
        teaseMsg.style.opacity = '1';
        teaseMsg.style.left = (x + 20) + 'px';
        teaseMsg.style.top = (y - 40) + 'px';
        
        setTimeout(() => { 
            teaseMsg.style.opacity = '0'; 
        }, 1000);
    }
}

function acceptProposal() {
    // Start confetti
    startConfetti();
    
    // Show modal
    document.getElementById('finalModal').classList.add('show');
    
    // Optional: Play music
    if(MUSIC_PATH) {
        const music = new Audio(MUSIC_PATH);
        music.volume = 0.5;
        music.play().catch(e => {
            console.log("Music autoplay blocked - user interaction required first");
        });
    }
}

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ff4d6d', '#ff8fa3', '#c9184a', '#ffb3c1', '#fff0f3', '#ffd700'];

    // Create confetti pieces
    for(let i = 0; i < 200; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            spin: Math.random() * 0.2 - 0.1,
            type: Math.random() > 0.5 ? 'rect' : 'circle'
        });
    }

    let animationId;
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        pieces.forEach(p => {
            ctx.save();
            ctx.translate(p.x + p.w/2, p.y + p.h/2);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            
            if(p.type === 'rect') {
                ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.w/2, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.restore();

            // Update position
            p.y += p.speed;
            p.angle += p.spin;
            
            // Reset if off screen
            if(p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
        
        animationId = requestAnimationFrame(draw);
    }
    
    draw();
    
    // Stop after 10 seconds to save performance
    setTimeout(() => {
        cancelAnimationFrame(animationId);
    }, 10000);
}

// Handle window resize for canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
