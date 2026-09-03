/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;

});


/* =========================
   SCROLL REVEAL
========================= */

const sections = document.querySelectorAll(
    ".section, .story-content, .vision-card, .number-box, .testimonial"
);

sections.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((element) => {
    observer.observe(element);
});


/* =========================
   COUNTER
========================= */

const counters = document.querySelectorAll(
    ".number-box strong"
);

let counterStarted = false;

const counterObserver = new IntersectionObserver(
    (entries) => {

        if (
            entries[0].isIntersecting &&
            !counterStarted
        ) {

            counterStarted = true;

            counters.forEach((counter) => {

                const target =
                    parseInt(counter.dataset.target);

                let current = 0;

                const increment =
                    target / 80;

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current).toLocaleString("it-IT");

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target.toLocaleString("it-IT") + "+";

                    }

                };

                updateCounter();

            });

        }

    },
    {
        threshold: 0.5
    }
);


const numbersSection =
    document.querySelector(".numbers");

if (numbersSection) {
    counterObserver.observe(numbersSection);
}


/* =========================
   VIDEO PLAY
========================= */

const video =
    document.getElementById("mainVideo");

const videoButton =
    document.getElementById("videoPlay");


if (video && videoButton) {

    videoButton.addEventListener("click", () => {

        if (video.paused) {

            video.play();

            videoButton.textContent = "PAUSE";

        } else {

            video.pause();

            videoButton.textContent = "PLAY";

        }

    });

}


/* =========================
   FORM
========================= */

const form =
    document.getElementById("contactForm");


if (form) {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Grazie. La tua richiesta è stata ricevuta."
        );

        form.reset();

    });

}


/* =========================
   MAGNETIC BUTTON EFFECT
========================= */

const buttons =
    document.querySelectorAll(".primary-button");


buttons.forEach((button) => {

    button.addEventListener("mousemove", (e) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * .08}px, ${y * .08}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0,0)";

    });

});
