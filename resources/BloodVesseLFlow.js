/* Author: Vienna Ly, BCIT LTC 2022
 * © copyleft
 * Repo: GitHub https://github.com/vie74050/BloodVesselFlow 
 * Demo on learn.bcit.ca LOR: 
 * 
 **/

/**Sets the css property --flow-rate, used for animation duration.
 * @param number n Time in seconds for animation */
function SetFlow(n=4) {
    const root = document.documentElement;
    root.style.setProperty('--flow-rate', n + 's');
}

/**Sets the css property --size, used for animation scale.
 * @param number n Size of vessel w.r.t original svg (n=1) */
function SetSize(n=1) {
    const root = document.documentElement;
    root.style.setProperty('--size', n);
}