const $ = (elt, l) => {
  return (l) ? document.querySelectorAll(elt) : document.querySelector(elt);
};

const listener = (elt, ev, fun) => {
  elt.addEventListener(ev, fun, false);
}

var ErrNode = [
  $('#name+span'),
  $('#surname+span'),
  $('#email+span'),
  $('#number+span'),
  $('#pass+span')
  ],
  Input = $('label+input:not(#file)', 'node'),
  ErrText = ['entrez un nom d\'au moins 3 lettre sans chiffre', 'entrez un prenom d\'au moins 3 lettre sans chiffre', 'addresse email invalide ', 'entrez un numero d\'au moins 9 chiffre', 'entrez un mot de passe d\'au moins 6 caractère'],
  InputLen = [3, 3, 0, 9, 6],
  Ipattern = [/[a-z]/i, /[a-z]/i, /[a-z0-9]+@[a-z]{5}\.com/i, /\d/i, /[a-z0-9]./ig],
  Ifile = $('#file');

Input.forEach((elt, i, arr) => {
  var i = i;
  console.log(i)
  listener(elt, 'blur', (e) => {
    if (elt.value.length < InputLen[i] || !Ipattern[i].test(elt.value)) {
      ErrNode[i].innerText = ErrText[i];
      $('.submit').classList.add('disabled');
      $('.submit').disabled = true;
      elt.classList.add('invalid');
    } else {
      ErrNode[i].innerText = '';
      $('.btn.submit').classList.remove('disabled');
      $('.submit').disabled = false;
      elt.classList.remove('invalid');
    }
  });

  listener(elt, 'focus', (e) => {
    ErrNode[i].innerText = '';
    $('.btn.submit').classList.remove('disabled');
    $('.submit').disabled = true;
    elt.classList.remove('invalid');
  })

  listener($('.reset'), 'click', () => {
    ErrNode[i].innerText = '';
    $('.btn.submit').classList.remove('disabled');
    $('.submit').disabled = false;
    elt.classList.remove('invalid');
  });
});

listener(Ifile, 'change', (e) => {
  var accept = ['png', 'jpeg', 'jpg', 'gif'],
    file = Ifile.files[0];
  if (accept.includes(file.name.split('.')[1])) {
    var Reader = new FileReader();
    Reader.onload = function() {
      $('legend img').src = this.result;
    }
    Reader.readAsDataURL(file);
  }
});

$('.submit').onclick = function(e) {
  var err = 0;
  e.preventDefault();

  Input.forEach((elt, i) => {
    if (elt.value.length < InputLen[i] || !Ipattern[i].test(elt.value)) {
      ErrNode[i].innerText = ErrText[i];
      $('.submit').classList.add('disabled');
      $('.submit').disabled = true;
      elt.classList.add('invalid');
      err++;
    }
  });

  if (err == 0) {
    alert('Les donnée on bien été envoyé 😉');
    $('.reset').click();
  }

}
