const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Activa el efecto
                } else {
                    entry.target.classList.remove("visible"); // Reinicia el efecto al hacer scroll
                }
            });
        }, { threshold: 0.3 });

        // Seleccionamos todos los elementos con la clase .fade-in y los observamos
        document.querySelectorAll(".fade-in").forEach(element => {
            observer.observe(element);
        });
