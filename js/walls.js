if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'walls'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'walls'.");
}var walls = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwUPAE = Kotlin.throwUPAE;
  var toShort = Kotlin.toShort;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var scroll;
  function get_scroll() {
    if (scroll == null)
      return throwUPAE('scroll');
    return scroll;
  }
  function set_scroll(scroll_0) {
    scroll = scroll_0;
  }
  var popup;
  function get_popup() {
    if (popup == null)
      return throwUPAE('popup');
    return popup;
  }
  function set_popup(popup_0) {
    popup = popup_0;
  }
  var popupWall;
  function get_popupWall() {
    if (popupWall == null)
      return throwUPAE('popupWall');
    return popupWall;
  }
  function set_popupWall(popupWall_0) {
    popupWall = popupWall_0;
  }
  var popupWallName;
  function get_popupWallName() {
    if (popupWallName == null)
      return throwUPAE('popupWallName');
    return popupWallName;
  }
  function set_popupWallName(popupWallName_0) {
    popupWallName = popupWallName_0;
  }
  var popupWallDownload;
  function get_popupWallDownload() {
    if (popupWallDownload == null)
      return throwUPAE('popupWallDownload');
    return popupWallDownload;
  }
  function set_popupWallDownload(popupWallDownload_0) {
    popupWallDownload = popupWallDownload_0;
  }
  var popupWallAuthor;
  function get_popupWallAuthor() {
    if (popupWallAuthor == null)
      return throwUPAE('popupWallAuthor');
    return popupWallAuthor;
  }
  function set_popupWallAuthor(popupWallAuthor_0) {
    popupWallAuthor = popupWallAuthor_0;
  }
  var title;
  function get_title() {
    if (title == null)
      return throwUPAE('title');
    return title;
  }
  function set_title(title_0) {
    title = title_0;
  }
  var copyright;
  function get_copyright() {
    if (copyright == null)
      return throwUPAE('copyright');
    return copyright;
  }
  function set_copyright(copyright_0) {
    copyright = copyright_0;
  }
  var blurFilter;
  function main$lambda(closure$http) {
    return function (it) {
      if (closure$http.readyState === toShort(4)) {
        if (closure$http.status === toShort(200) || closure$http.status === toShort(0)) {
          start(closure$http.responseText);
        }}return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var http = new XMLHttpRequest();
    http.open('GET', 'http://raw.githubusercontent.com/leoxshn/walls/master/index', true);
    http.onreadystatechange = main$lambda(http);
    http.send();
    set_scroll(Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('scroll')), HTMLDivElement) ? tmp$ : throwCCE());
    set_popup(Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('popup')), HTMLDivElement) ? tmp$_0 : throwCCE());
    set_popupWall(Kotlin.isType(tmp$_1 = ensureNotNull(document.getElementById('wall')), Image) ? tmp$_1 : throwCCE());
    set_popupWallName(ensureNotNull(document.getElementById('name')));
    var string = 'download';
    set_popupWallDownload(Kotlin.isType(tmp$_2 = ensureNotNull(document.getElementById(string)), HTMLAnchorElement) ? tmp$_2 : throwCCE());
    set_popupWallAuthor(ensureNotNull(document.getElementById('author')));
    set_title(Kotlin.isType(tmp$_3 = ensureNotNull(document.getElementById('title')), HTMLElement) ? tmp$_3 : throwCCE());
    var string_0 = 'copyright';
    set_copyright(Kotlin.isType(tmp$_4 = ensureNotNull(document.getElementById(string_0)), HTMLElement) ? tmp$_4 : throwCCE());
  }
  function start$lambda$lambda(closure$dir, closure$name, closure$author) {
    return function (it) {
      ensureNotNull(document.body).style.overflowY = 'hidden';
      get_scroll().style.filter = blurFilter;
      get_title().style.filter = blurFilter;
      get_copyright().style.filter = blurFilter;
      get_popup().style.display = 'block';
      var newSrc = './img/' + closure$dir + '/img.png';
      if (!equals(get_popupWall().src, newSrc)) {
        get_popupWall().src = '';
        get_popupWall().src = './img/' + closure$dir + '/thumb.jpg';
        get_popupWall().src = newSrc;
      }get_popupWallName().textContent = closure$name;
      get_popupWallAuthor().textContent = closure$author;
      var $receiver = get_popupWallDownload();
      $receiver.type = 'application/octet-stream';
      $receiver.href = newSrc;
      return Unit;
    };
  }
  function start(string) {
    var tmp$;
    println(string);
    var tmpName = {v: ''};
    var tmpAuthor = {v: ''};
    var tmpDir = {v: ''};
    tmp$ = lines(string).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      if (line.length === 0) {
        var tmp$_0 = get_scroll();
        var $receiver = document.createElement('div');
        addClass($receiver, ['card']);
        var $receiver_0 = new Image();
        $receiver_0.src = './img/' + tmpDir.v + '/thumb.jpg';
        $receiver.appendChild($receiver_0);
        var $receiver_1 = document.createElement('p');
        $receiver_1.textContent = tmpName.v;
        $receiver.appendChild($receiver_1);
        var dir = tmpDir.v;
        var name = tmpName.v;
        var author = tmpAuthor.v;
        $receiver.addEventListener('click', start$lambda$lambda(dir, name, author));
        tmp$_0.appendChild($receiver);
      } else {
        switch (line.charCodeAt(0)) {
          case 110:
            tmpName.v = line.substring(2);
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
  }
  var getById = defineInlineFunction('walls.getById_61zpoe$', function (string) {
    return document.getElementById(string);
  });
  Object.defineProperty(_, 'scroll', {
    get: get_scroll,
    set: set_scroll
  });
  Object.defineProperty(_, 'popup', {
    get: get_popup,
    set: set_popup
  });
  Object.defineProperty(_, 'popupWall', {
    get: get_popupWall,
    set: set_popupWall
  });
  Object.defineProperty(_, 'popupWallName', {
    get: get_popupWallName,
    set: set_popupWallName
  });
  Object.defineProperty(_, 'popupWallDownload', {
    get: get_popupWallDownload,
    set: set_popupWallDownload
  });
  Object.defineProperty(_, 'popupWallAuthor', {
    get: get_popupWallAuthor,
    set: set_popupWallAuthor
  });
  Object.defineProperty(_, 'title', {
    get: get_title,
    set: set_title
  });
  Object.defineProperty(_, 'copyright', {
    get: get_copyright,
    set: set_copyright
  });
  Object.defineProperty(_, 'blurFilter', {
    get: function () {
      return blurFilter;
    }
  });
  $$importsForInline$$.walls = _;
  _.main = main;
  _.start_61zpoe$ = start;
  _.getById_61zpoe$ = getById;
  blurFilter = 'blur(15px)';
  main();
  Kotlin.defineModule('walls', _);
  return _;
}(typeof walls === 'undefined' ? {} : walls, kotlin);
