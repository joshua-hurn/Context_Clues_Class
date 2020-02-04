document.addEventListener('DOMContentLoaded', function () {
    for (var i = 1; i < 101; i++) {
        var h3 = document.createElement('h3');
        h3.textContent = `Accusation ${i}`;
        let details = addDetails(i);
        h3.addEventListener('click', details);
        document.body.appendChild(h3);
    }

    function addDetails(i) {
        var friends = ['Bart', 'Homer', 'Lisa', 'Marge', 'Maggie'];
        var locations = ['bathroom', 'kitchen', 'foyer', 'dining room', 'office', 'library', 'sun room', 'shed', 'garden', 'driveway'];
        var weapons = ['mace', 'sword', 'candlestick', 'rope', 'club', 'laptop', 'icepick', 'saber', 'knife', 'bedpost', 'gun', 'rifle', 'trebuchet', 'cannon', 'laser', 'machine gun', 'bullet', 'fist', 'airplane', 'Earth'];

        return function () {
            alert(`Accusation ${i}: I accuse ${friends[i % 20]}, with the ${weapons[i % 5]} in the ${locations[i % 10]}!`);
        }
    }
});
