function is_url(str) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return false;
  }
  else {
    return true;
  }
}
var new_tab = "";
document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('link');
  link.addEventListener('click', function () {
    if (is_url(String(document.getElementById('linkinput').value))) {
      document.getElementById('error').innerHTML = "Invalid Link !";
    } else {
      document.getElementById('error').innerHTML = "";
      document.getElementById("myframe").src = String(document.getElementById('linkinput').value);
      document.getElementById('linkpage').style.display = 'none';
      document.getElementById('framepage').style.display = 'initial';
    }
    new_tab = String(document.getElementById('linkinput').value);
  })
  var lgoogle = document.getElementById('lgoogle');
  lgoogle.addEventListener('click', function () {
      document.getElementById('error').innerHTML = "";
      document.getElementById("myframe").src ="https://www.google.com/";
      document.getElementById('linkpage').style.display = 'none';
      document.getElementById('framepage').style.display = 'initial';
      new_tab = "https://www.google.com/";
  })
  var lyt = document.getElementById('lyt');
  lyt.addEventListener('click', function () {
      document.getElementById('error').innerHTML = "";
      document.getElementById("myframe").src ="https://www.youtube.com/";
      document.getElementById('linkpage').style.display = 'none';
      document.getElementById('framepage').style.display = 'initial';
      new_tab = "https://www.youtube.com/";
  })
  var lgm = document.getElementById('lgm');
  lgm.addEventListener('click', function () {
      document.getElementById('error').innerHTML = "";
      document.getElementById("myframe").src ="https://www.google.com/intl/en-GB/gmail/about/#";
      document.getElementById('linkpage').style.display = 'none';
      document.getElementById('framepage').style.display = 'initial';
      new_tab = "https://www.google.com/intl/en-GB/gmail/about/#"
  })
  var lws = document.getElementById('lws');
  lws.addEventListener('click', function () {
      document.getElementById('error').innerHTML = "";
      document.getElementById("myframe").src ="https://web.whatsapp.com/";
      document.getElementById('linkpage').style.display = 'none';
      document.getElementById('framepage').style.display = 'initial';
      new_tab = "https://web.whatsapp.com/";
  })
  var lgt = document.getElementById('lgt');
  lgt.addEventListener('click', function () {
      document.getElementById('error').innerHTML = "";
      document.getElementById("myframe").src ="https://github.com/";
      document.getElementById('linkpage').style.display = 'none';
      document.getElementById('framepage').style.display = 'initial';
      new_tab = "https://github.com/";
  })
  var lam = document.getElementById('lam');
  lam.addEventListener('click', function () {
      document.getElementById('error').innerHTML = "";
      document.getElementById("myframe").src ="https://www.amazon.in/";
      document.getElementById('linkpage').style.display = 'none';
      document.getElementById('framepage').style.display = 'initial';
      new_tab = "https://www.amazon.in/";
  })

  var newtab = document.getElementById('newtab');
  newtab.addEventListener('click', function () {
    chrome.tabs.create({ url: new_tab });
  })

  var back = document.getElementById('back');
  back.addEventListener('click', function () {
    document.getElementById('linkpage').style.display = 'block';
    document.getElementById('framepage').style.display = 'none';
    document.getElementById('linkinput').value = "";
  })
})
