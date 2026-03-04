/* Author: Vienna Ly, BCIT LTC 2022 updated 2024
 * © copyleft
 * Repo: GitHub https://github.com/vie74050/BloodVesselFlow 
 * Demo on learn.bcit.ca LOR: 
 * 
 **/

/**Sets the css property --flow-rate, used for animation duration.
 * @param number n Time in seconds for animation */
function SetFlow(n=20) {
    const root = document.documentElement;
    root.style.setProperty('--flow-rate', n + 's');
}

/**Sets the css property --size, used for animation scale.
 * @param number n Size of vessel w.r.t original svg (n=1) */
function SetSize(n=0.8) {
    const root = document.documentElement;
    root.style.setProperty('--size', n);
}

function SetText(s='Normal Flow') {
    const text_el = document.getElementById('vessel-text');
    text_el.textContent = s;
}

function SetSelected(button) {
    const buttons = document.querySelectorAll('.ui-nav button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}