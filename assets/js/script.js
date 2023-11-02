const click = document.querySelector('.main');
const jokes = document.querySelector('#joke');

const getJoke = async() => {

    const res = await fetch("https://api.blablagues.net/?rub=blagues&cat=belges,histoires+droles,melon+et+meleche&cat_ex=star+wars,ta+mere,monsieur+et+madame");
    const data = await res.json();

    showJoke(data.data);

}

const showJoke = joking => {
    const joke = joking.content;

    jokes.innerHTML = `<p>${joke.text_head}</p>
        <p>${joke.text == '' ? joke.text_hidden : joke.text}</p>`;

        console.log(joke);
}

getJoke();

click.addEventListener('click', function() {
    getJoke();
});
