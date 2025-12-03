// Dynamic FAQ Section

document.addEventListener('DOMContentLoaded', () => {
            const questions = document.querySelectorAll('.faq-question');

            questions.forEach(question => {
                question.addEventListener('click', function() {
                    const item = this.parentElement;
                    const answer = item.querySelector('.faq-answer');

                    // Toggle the active class for the icon animation
                    item.classList.toggle('active');

                    // Logic for smooth height animation
                    if (item.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    } else {
                        answer.style.maxHeight = 0;
                    }
                });
            });
        });