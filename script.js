// Cookie banner: remembers the visitor's choice
(function () {
  var b = document.getElementById("cookie-banner"), k = "cookie-choice";
  try { if (!localStorage.getItem(k)) b.hidden = false; } catch (e) { b.hidden = false; }
  b.addEventListener("click", function (ev) {
    var c = ev.target.getAttribute("data-c"); if (!c) return;
    try { localStorage.setItem(k, c); } catch (e) {}
    b.hidden = true;
    // EDIT: only load analytics here if c === "accepted"
  });
})();
