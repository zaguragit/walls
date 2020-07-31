if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'walls'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'walls'.");
}var walls = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var toShort = Kotlin.toShort;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  function main$lambda$lambda$lambda(closure$blurFilter, closure$scroll, closure$title, closure$topBar, closure$copyright, closure$popup, closure$type, closure$dir, closure$popupWall, closure$name, closure$popupWallName, closure$author, closure$popupWallAuthor, closure$popupWallDownload) {
    return function (it) {
      ensureNotNull(document.body).style.overflowY = 'hidden';
      closure$scroll.style.filter = closure$blurFilter;
      closure$title.style.filter = closure$blurFilter;
      closure$topBar.style.filter = closure$blurFilter;
      closure$copyright.style.filter = closure$blurFilter;
      closure$popup.style.display = 'block';
      var newSrc;
      if (equals(closure$type, 'svg')) {
        newSrc = './img/' + closure$dir + '/img.svg';
        if (!equals(closure$popupWall.src, newSrc)) {
          closure$popupWall.src = '';
          closure$popupWall.src = newSrc;
        }} else {
        newSrc = './img/' + closure$dir + '/img.png';
        if (!equals(closure$popupWall.src, newSrc)) {
          closure$popupWall.src = '';
          closure$popupWall.src = './img/' + closure$dir + '/thumb.jpg';
          closure$popupWall.src = newSrc;
        }}
      closure$popupWallName.textContent = closure$name;
      closure$popupWallAuthor.textContent = closure$author;
      var $receiver = closure$popupWallDownload;
      var closure$newSrc = newSrc;
      $receiver.type = 'application/octet-stream';
      $receiver.href = closure$newSrc;
      return Unit;
    };
  }
  function main$lambda(closure$http, closure$scroll, closure$blurFilter, closure$title, closure$topBar, closure$copyright, closure$popup, closure$popupWall, closure$popupWallName, closure$popupWallAuthor, closure$popupWallDownload) {
    return function (it) {
      var tmp$;
      if (closure$http.readyState === toShort(4)) {
        if (closure$http.status === toShort(200) || closure$http.status === toShort(0)) {
          var string = closure$http.responseText;
          var tmpName = {v: ''};
          var tmpAuthor = {v: ''};
          var tmpDir = {v: ''};
          var tmpType = {v: ''};
          tmp$ = lines(string).iterator();
          while (tmp$.hasNext()) {
            var line = tmp$.next();
            if (line.length === 0) {
              var tmp$_0 = closure$scroll;
              var $receiver = document.createElement('div');
              var closure$blurFilter_0 = closure$blurFilter;
              var closure$scroll_0 = closure$scroll;
              var closure$title_0 = closure$title;
              var closure$topBar_0 = closure$topBar;
              var closure$copyright_0 = closure$copyright;
              var closure$popup_0 = closure$popup;
              var closure$popupWall_0 = closure$popupWall;
              var closure$popupWallName_0 = closure$popupWallName;
              var closure$popupWallAuthor_0 = closure$popupWallAuthor;
              var closure$popupWallDownload_0 = closure$popupWallDownload;
              addClass($receiver, ['card']);
              var $receiver_0 = new Image();
              var tmp$_1;
              if (equals(tmpType.v, 'svg'))
                tmp$_1 = './img/' + tmpDir.v + '/img.svg';
              else
                tmp$_1 = './img/' + tmpDir.v + '/thumb.jpg';
              $receiver_0.src = tmp$_1;
              $receiver.appendChild($receiver_0);
              var $receiver_1 = document.createElement('p');
              $receiver_1.textContent = tmpName.v;
              $receiver.appendChild($receiver_1);
              var dir = tmpDir.v;
              var name = tmpName.v;
              var author = tmpAuthor.v;
              var type = tmpType.v;
              $receiver.addEventListener('click', main$lambda$lambda$lambda(closure$blurFilter_0, closure$scroll_0, closure$title_0, closure$topBar_0, closure$copyright_0, closure$popup_0, type, dir, closure$popupWall_0, name, closure$popupWallName_0, author, closure$popupWallAuthor_0, closure$popupWallDownload_0));
              tmp$_0.appendChild($receiver);
              tmpType.v = '';
            } else {
              switch (line.charCodeAt(0)) {
                case 110:
                  tmpName.v = line.substring(2);
                  break;
                case 116:
                  tmpType.v = line.substring(2);
                  break;
                case 97:
                  tmpAuthor.v = line.substring(2);
                  break;
                case 100:
                  tmpDir.v = line.substring(2);
                  break;
              }
            }
          }
        }}return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var blurFilter = 'blur(15px)';
    var http = new XMLHttpRequest();
    http.open('GET', 'https://lposidon.github.io/walls/index', true);
    var scroll = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('scroll')), HTMLDivElement) ? tmp$ : throwCCE();
    var popup = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('popup')), HTMLDivElement) ? tmp$_0 : throwCCE();
    var popupWall = Kotlin.isType(tmp$_1 = ensureNotNull(document.getElementById('wall')), Image) ? tmp$_1 : throwCCE();
    var popupWallName = ensureNotNull(document.getElementById('name'));
    var id = 'download';
    var popupWallDownload = Kotlin.isType(tmp$_2 = ensureNotNull(document.getElementById(id)), HTMLAnchorElement) ? tmp$_2 : throwCCE();
    var popupWallAuthor = ensureNotNull(document.getElementById('author'));
    var title = Kotlin.isType(tmp$_3 = ensureNotNull(document.getElementById('title')), HTMLElement) ? tmp$_3 : throwCCE();
    var topBar = Kotlin.isType(tmp$_4 = ensureNotNull(document.getElementById('topBar')), HTMLSpanElement) ? tmp$_4 : throwCCE();
    var id_0 = 'copyright';
    var copyright = Kotlin.isType(tmp$_5 = ensureNotNull(document.getElementById(id_0)), HTMLElement) ? tmp$_5 : throwCCE();
    http.onreadystatechange = main$lambda(http, scroll, blurFilter, title, topBar, copyright, popup, popupWall, popupWallName, popupWallAuthor, popupWallDownload);
    http.send();
  }
  var get = defineInlineFunction('walls.get_61zpoe$', function (id) {
    return document.getElementById(id);
  });
  $$importsForInline$$.walls = _;
  _.main = main;
  _.get_61zpoe$ = get;
  main();
  Kotlin.defineModule('walls', _);
  return _;
}(typeof walls === 'undefined' ? {} : walls, kotlin);
