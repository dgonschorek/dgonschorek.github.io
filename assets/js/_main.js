/* ==========================================================================
   Site scripts (bundled into main.min.js with `npm run build:js`)
   ========================================================================== */

/*jslint es6 */
'use strict';

/* --------------------------------------------------------------------------
   Theme: dark by default, light if the visitor chose it (stored in localStorage).
   The stored preference is applied before first paint by an inline script in
   _includes/head.html; this keeps the toggle icon in sync and handles clicks.
   -------------------------------------------------------------------------- */

function getStoredTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    return null;
  }
}

function setTheme(theme) {
  const useTheme = theme || getStoredTheme() || "dark";

  if (useTheme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  } else {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  }
}

function toggleTheme() {
  const newTheme = $("html").attr("data-theme") === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("theme", newTheme);
  } catch (e) {}
  setTheme(newTheme);
}

/* --------------------------------------------------------------------------
   Page ready
   -------------------------------------------------------------------------- */

$(document).ready(function () {
  const scssLarge = 925; // px, $large in _sass/_themes.scss

  setTheme();

  // Theme toggle: mouse and keyboard (Enter / Space)
  $("#theme-toggle a")
    .on("click", toggleTheme)
    .on("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    });

  // Contact & links drop-down in the sidebar on small screens
  const $linksButton = $(".author__urls-wrapper button");
  $linksButton.on("click", function () {
    $(".author__urls").fadeToggle("fast");
    const expanded = $linksButton.attr("aria-expanded") === "true";
    $linksButton.attr("aria-expanded", expanded ? "false" : "true").toggleClass("open");
  });

  // Restore the links list if it was collapsed and the window becomes wide
  $(window).on("resize", function () {
    if ($(".author__urls.social-icons").css("display") === "none" && $(window).width() >= scssLarge) {
      $(".author__urls").css("display", "block");
    }
  });
});
