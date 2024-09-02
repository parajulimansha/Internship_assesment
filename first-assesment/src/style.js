// set the dropdown menu element
const $targetEl = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl = document.getElementById('dropdownButton');

// options with default values
const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
    onHide: () => {
        console.log('dropdown has been hidden');
    },
    onShow: () => {
        console.log('dropdown has been shown');
    },
    onToggle: () => {
        console.log('dropdown has been toggled');
    },
};


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.getElementById('carouselSlides');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slideCount = slides.children.length;
  let currentSlide = 0;

  function updateSlidePosition() {
    const offset = -currentSlide * 100; // Move the slides
    slides.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener('click', function () {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slideCount - 1;
    updateSlidePosition();
  });

  nextBtn.addEventListener('click', function () {
    currentSlide = (currentSlide < slideCount - 1) ? currentSlide + 1 : 0;
    updateSlidePosition();
  });

  
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Adjust the speed as needed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower increment to slow and higher increment to speed up
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});













// document.addEventListener('DOMContentLoaded', function () {
//     const slides = document.querySelectorAll('.carousel-slide');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     let currentIndex = 0;

//     // Function to show the current slide
//     function showSlide(index) {
//         const slideWidth = slides[0].clientWidth;
//         document.getElementById('carouselSlides').style.transform = `translateX(-${index * slideWidth}px)`;
//     }

//     // Event listener for the Next button
//     nextBtn.addEventListener('click', function () {
//         currentIndex = (currentIndex + 1) % slides.length;
//         showSlide(currentIndex);
//     });

//     // Event listener for the Previous button
//     prevBtn.addEventListener('click', function () {
//         currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//         showSlide(currentIndex);
//     });

//     // Initial display of the first slide
//     showSlide(currentIndex);
// });

