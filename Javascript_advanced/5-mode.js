function changeMode(size, weight, transform, backgroundColor, color){
    return function() {  
        document.body.style.fontSize = size +'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = color;
    }
}
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.textContent= 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.onclick = darkMode;
    document.body.appendChild(darkModeButton);

    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.onclick = screamMode;
    document.body.appendChild(screamModeButton);    

}
main();