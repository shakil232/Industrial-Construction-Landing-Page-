

// PROGRESS COUNTER ANIMATION-JS
const counters = document.querySelectorAll('.counter-number');
const countSpeed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerHTML;
        const increment = target / countSpeed;

        if (count < target) {
            counter.innerHTML = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        }
        else {
            count.innerHTML = target;
        }
    }
    updateCount()
});