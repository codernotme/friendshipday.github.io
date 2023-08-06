const exitButton = document.getElementById('exitButton');
const contentBox = document.getElementById('contentBox');
const question = document.getElementById('question');
const nextBtn = document.getElementById('nextBtn');

let currentQuoteIndex = 0;

exitButton.addEventListener('click', () => {
    alert("You can't exit this webpage, my friend. Just like you can't exit from my life! Hehe!");
});

nextBtn.addEventListener('click', () => {
    if (currentQuoteIndex < quotes.length) {
        if (currentQuoteIndex === 1) {
            question.textContent = "Do you know what day is today?";
        } else if (currentQuoteIndex === 2) {
            question.textContent = "It's friendship day, my friend!";
            nextBtn.textContent = "Next";
        } else if (currentQuoteIndex === 3) {
            question.textContent = "I'm so glad that I met you in this life!";
        } else if (currentQuoteIndex === 4) {
            question.textContent = "So, yeah...";
        } else if (currentQuoteIndex === 5) {
            question.innerHTML = "<strong>Happy Friendship Day, my friend!</strong>";
            nextBtn.textContent = "Next";
        } else if (currentQuoteIndex === 6) {
            showRandomQuote();
        } else {
            showNextQuote();
        }
        currentQuoteIndex++;
    } else {
        contentBox.innerHTML = '<p>Thank you for sharing these moments of friendship! 🌟</p>';
    }
});

const quotes = [
    "Here they come 🫣🫣",
    "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    "A real friend is one who walks in when the rest of the world walks out.",
    "Friendship isn't about whom you have known the longest. It's about who came and never left your side.",
    "A friend is someone who knows all about you and still loves you.",
    "A true friend is someone who is there for you when they would rather be somewhere else.",
    "A friend is someone who gives you total freedom to be yourself.",
    "Friendship is the only cement that will ever hold the world together.",
    "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
    "A single rose can be my garden... a single friend, my world.",
    "Friendship is the golden thread that ties the heart of all the world.",
    "A sudden thought strikes me, - let us swear an eternal friendship. - John Hookham Frere",
    "Real friendship, like real poetry, is extremely rare - and precious as a pearl. - Tahar Ben Jelloun",
    "We'll be Friends Forever, won't we, Pooh?' asked Piglet. Even longer,' Pooh answered. - A. A. Milne",
    "My fair one, let us swear an eternal friendship. - Moliere",
    "OHHH WAIT WAIT WAIT WAIT!!! 🤡🤡",
    "HERE COMES THE MORE LOL!! BAWAHAHHWHHAHAHA!!!!😭😭🤣🤣🤣🤣",
    "Make new friends, but keep the old;\nThose are silver, these are gold.\nNew-made friendships, like new wine,\nAge will mellow and refine.\nFriendships that have stood the test -\nTime and change - are surely best;\nBrow may wrinkle, hair grow gray,\nFriendship never knows decay.\nFor 'mid old friends, tried and true,\nOnce more we our youth renew.\nBut old friends, alas! may die,\nNew friends must their place supply.\nCherish friendship in your breast-\nNew is good, but old is best;\nMake new friends, but keep the old;\nThose are silver, these are gold. - Joseph Parry",
    "Madam, I have been looking for a person who disliked gravy all my life; let us swear eternal friendship. - Sydney Smith",
    "Friendship is a single soul dwelling in two bodies. - Aristotle",
    "I count myself really fortunate that I have some lifelong friends. The best thing about a friend is when you are being your own worst enemy a friend can help snap you out of it. - Amy Grant",
    "In each person I catch the fleeting suggestion of something beautiful and swear eternal friendship with that. - George Santayana",
    "Cheese, wine, and a friend must be old to be good. - Reinhold Niebuhr",
    "Wishing to be friends is quick work, but friendship is a slow ripening fruit. - Aristotle",
    "Whither thou goest, I will go; Where thou diest, will I die And there will I be buried: The Angel do so to me, and more also, If aught but death part thee and me. - Cassandra Clare",
    "Friendship! Mysterious cement of the soul, Sweet'ner of life, and solder of society. - Robert Blair",
    "Friendship is the shadow of the evening, which increases with the setting sun of life. - Jean de La Fontaine",
    "The truth is friendship is every bit as sacred and eternal as marriage. - Katherine Mansfield",
    "Friendship often ends in love, but love in friendship - never. - Charles Caleb Colton",
    "Friendship is also a vital and wonderful part of courtship and marriage. A relationship between a man and a woman that begins with friendship and then ripens into romance and eventually marriage will usually become an enduring, eternal friendship. - Marlin K. Jensen"
];

function showRandomQuote() {
    question.textContent = quotes[currentQuoteIndex - 1];
}

function showNextQuote() {
    question.textContent = quotes[currentQuoteIndex];
}


