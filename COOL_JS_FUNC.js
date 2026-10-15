// 1. Text to Speech
function speak() {
    speechSynthesis.speak(
        new SpeechSynthesisUtterance(text.value)
    );
}


// 2. Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}


// 3. Generate Random Color
function changeColor() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
}


// 4. Show Current Time
function showTime() {
    alert(new Date().toLocaleTimeString());
}


// 5. Copy Text to Clipboard
function copyText() {
    navigator.clipboard.writeText(text.value);
}


// 6. Make Text Uppercase
function uppercase() {
    text.value = text.value.toUpperCase();
}


// 7. Count Characters
function countCharacters() {
    alert(text.value.length);
}


// 8. Stop Text to Speech
function stopSpeaking() {
    speechSynthesis.cancel();
}


// 9. Random Number Generator
function randomNumber() {
    alert(Math.floor(Math.random() * 100) + 1);
}


// 10. Speak in a Different Voice
function speakSlowly() {
    let utterance = new SpeechSynthesisUtterance(text.value);
    utterance.rate = 0.7;
    utterance.pitch = 1.3;
    speechSynthesis.speak(utterance);
}
