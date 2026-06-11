document.addEventListener("DOMContentLoaded", function () {

  // ☰ボタンでメニュー開閉（スマホ用）
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  // サブメニュー開閉
  document.querySelectorAll(".has-submenu > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    });
  });

});
``