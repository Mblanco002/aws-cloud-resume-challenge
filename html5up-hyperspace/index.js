//javaScript code

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://fss2rzfgolsar6gk2huzlj46my0skauw.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();