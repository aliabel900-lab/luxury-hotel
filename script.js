// SMOOTH SCROLLING
        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                window.scrollTo({
                    top: target.offsetTop - 80, // adjust if header is fixed
                    behavior: "smooth"
                });
            });
        });

        // BOOKING FORM VALIDATION
        const form = document.getElementById("bookingForm");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const checkIn = document.getElementById("check-in").value;
            const checkOut = document.getElementById("check-out").value;
            const guests = parseInt(document.getElementById("guests").value);
            const room = document.getElementById("room").value;

            if (!checkIn || !checkOut || !guests || !room) {
                alert("Please fill all fields!");
                return;
            }

            const inDate = new Date(checkIn);
            const outDate = new Date(checkOut);

            if (outDate <= inDate) {
                alert("Check-out date must be after check-in date!");
                return;
            }

            if (guests <= 0) {
                alert("Guests must be at least 1!");
                return;
            }

            alert("Booking successful! We will contact you shortly.");
            form.reset();
        });

        // NAVBAR ACTIVE LINK ON SCROLL
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });