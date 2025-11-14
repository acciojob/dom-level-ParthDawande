//your JS code here. If required.
const element = document.getElementById("level");

    let level = 0;
    let current = element;

    // Traverse upward until there is no parent
    while (current) {
        level++;
        current = current.parentElement;
    }

    alert("The level of the element is: " + level);