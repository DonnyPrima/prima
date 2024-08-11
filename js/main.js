
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birth Day Sayang, Panjang Umur dan Sehat Selalu, Dimudahkan Rezeki, Urusan, dan Pekerjaan. I Hope that With Age, You Become A Better Person Than Before Aamiin I LOVE U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 150); // 500ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};