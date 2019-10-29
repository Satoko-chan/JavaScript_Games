'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['Super!', 'Happy', 'Unlucky', 'Bad'];
    // const results = ['Super!', 'Super!','Super!','Super!','Happy', 'Unlucky', 'Bad'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = 'Super!';
    } else if (n < 0.2) {
      btn.textContent = 'Happy';
    } else {
      btn.textContent = 'Bad';
    }

    // btn.textContent = n;

    // switch (n) {
    //   case 0:
    //     btn.textContent = 'Daokichi';
    //     break;
    //   case 1:
    //     btn.textContent = 'Tyukichi';
    //     break;
    //   case 2:
    //     btn.textContent = 'Kyo';
    //     break;
    // }
  });
}