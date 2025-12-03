// Data Source matching the video content
        const testimonials = [
            {
                quote: "I've learned more in the past few months with my coach than I did in years on my own. Their personalized approach made all the difference.",
                name: "Sarah Miller",
                title: "Marathon Runner",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                quote: "Training with a coach who really knows the sport has been a game-changer. I've shaved minutes off my time and am in the best shape of my life.",
                name: "James Carter",
                title: "Competitive Cyclist",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                quote: "With the right coaching, I was able to push past my limits. I couldn't have reached my goals without the guidance and support of an experienced coach.",
                name: "Emily Johnson",
                title: "CrossFit Athlete",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                quote: "The difference between training on your own and with an expert coach is huge. I've never felt more confident and prepared for my races.",
                name: "David Thompson",
                title: "Amateur Runner",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
        ];

        // DOM Elements
        const contentWrapper = document.getElementById('content-wrapper');
        const quoteEl = document.getElementById('quote');
        const authorEl = document.getElementById('author');
        const titleEl = document.getElementById('title');
        const avatarContainer = document.getElementById('avatar-container');

        let currentIndex = 0;
        let intervalId;

        // Initialize Avatars
        function initAvatars() {
            testimonials.forEach((t, index) => {
                const img = document.createElement('img');
                img.src = t.image;
                img.classList.add('avatar');
                img.alt = t.name;
                img.addEventListener('click', () => manualSwitch(index));
                avatarContainer.appendChild(img);
            });
        }

        // Update the displayed content
        function updateDisplay(index) {
            // 1. Update Avatars visual state immediately
            const avatars = document.querySelectorAll('.avatar');
            avatars.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });

            // 2. Fade out text
            contentWrapper.classList.add('fade-out');

            // 3. Wait for fade out, swap text, fade in
            setTimeout(() => {
                const data = testimonials[index];
                quoteEl.textContent = data.quote;
                authorEl.textContent = data.name;
                titleEl.textContent = data.title;
                
                contentWrapper.classList.remove('fade-out');
            }, 500); // Matches CSS transition duration
        }

        // Logic to switch to next slide automatically
        function nextSlide() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateDisplay(currentIndex);
        }

        // Logic for manual click
        function manualSwitch(index) {
            if (index === currentIndex) return; // Do nothing if clicking current
            
            // Stop auto-rotation so user can read
            clearInterval(intervalId);
            
            currentIndex = index;
            updateDisplay(currentIndex);

            // Restart auto-rotation
            intervalId = setInterval(nextSlide, 5000);
        }

        // Initialization
        initAvatars();
        updateDisplay(0); // Load first one
        intervalId = setInterval(nextSlide, 5000); // Change every 5 seconds