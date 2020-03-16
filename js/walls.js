if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'walls'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'walls'.");
}var walls = function (_, Kotlin) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var toShort = Kotlin.toShort;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var toString = Kotlin.toString;
  var repoUrl;
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
  function main$lambda(closure$http) {
    return function (it) {
      if (closure$http.readyState === toShort(4))
        start(closure$http.responseText);
      return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0;
    var http = new XMLHttpRequest();
    http.open('GET', 'http://raw.githubusercontent.com/leoxshn/walls/master/index.json', true);
    http.onreadystatechange = main$lambda(http);
    set_scroll(Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('scroll')), HTMLDivElement) ? tmp$ : throwCCE());
    set_popup(Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('popup')), HTMLDivElement) ? tmp$_0 : throwCCE());
    http.send();
  }
  function start$lambda$lambda$lambda(closure$obj, closure$popupWall, closure$popupWallName, closure$popupWallAuthor) {
    return function (it) {
      get_popup().style.display = 'block';
      var newSrc = repoUrl + '/' + toString(closure$obj['d']) + '/img.png';
      if (!equals(closure$popupWall.src, newSrc)) {
        closure$popupWall.src = '';
        closure$popupWall.src = repoUrl + '/' + toString(closure$obj['d']) + '/thumb.jpg';
        closure$popupWall.src = newSrc;
      }closure$popupWallName.textContent = toString(closure$obj['n']);
      closure$popupWallAuthor.textContent = toString(closure$obj['a']);
      return Unit;
    };
  }
  function start$lambda(closure$popupWall, closure$popupWallName, closure$popupWallAuthor) {
    return function (f, obj) {
      var tmp$;
      if (equals(typeof obj, 'object') && (Kotlin.isType(tmp$ = obj, Object) ? tmp$ : throwCCE())['d'] != null) {
        var tmp$_0 = get_scroll();
        var $receiver = document.createElement('div');
        var closure$popupWall_0 = closure$popupWall;
        var closure$popupWallName_0 = closure$popupWallName;
        var closure$popupWallAuthor_0 = closure$popupWallAuthor;
        addClass($receiver, ['card']);
        var $receiver_0 = new Image();
        $receiver_0.src = repoUrl + '/' + toString(obj['d']) + '/thumb.jpg';
        $receiver.appendChild($receiver_0);
        var $receiver_1 = document.createElement('p');
        $receiver_1.textContent = toString(obj['n']);
        $receiver.appendChild($receiver_1);
        $receiver.addEventListener('click', start$lambda$lambda$lambda(obj, closure$popupWall_0, closure$popupWallName_0, closure$popupWallAuthor_0));
        tmp$_0.appendChild($receiver);
      }return obj;
    };
  }
  function start(string) {
    var tmp$;
    var popupWall = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('wall')), Image) ? tmp$ : throwCCE();
    var popupWallName = ensureNotNull(document.getElementById('name'));
    var popupWallAuthor = ensureNotNull(document.getElementById('author'));
    JSON.parse(string, start$lambda(popupWall, popupWallName, popupWallAuthor));
  }
  Object.defineProperty(_, 'repoUrl', {
    get: function () {
      return repoUrl;
    }
  });
  Object.defineProperty(_, 'scroll', {
    get: get_scroll,
    set: set_scroll
  });
  Object.defineProperty(_, 'popup', {
    get: get_popup,
    set: set_popup
  });
  _.main = main;
  _.start_61zpoe$ = start;
  repoUrl = 'http://raw.githubusercontent.com/leoxshn/walls/master';
  main();
  Kotlin.defineModule('walls', _);
  return _;
}(typeof walls === 'undefined' ? {} : walls, kotlin);
