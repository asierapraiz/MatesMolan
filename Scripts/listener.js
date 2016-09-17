// Listen for orientation changes
window.addEventListener("orientationchange", function () {
    // Find matches
    var mql = window.matchMedia("(orientation: portrait)");

    // If there are matches, we're in portrait
    if (mql.matches) {
        $("#miModal").modal('hide');
    } else {
        $("#miModal").modal();
    }
}, false);

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if (mql.matches) {
    $("#miModal").modal();
} else {
    $("#miModal").modal('hide');
}
