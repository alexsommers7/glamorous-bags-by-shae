// Get Cookie Function
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Check Authentication Function
function checkAuthentication() {
  var authentication = getCookie("authenticated");
  if (authentication != "true" && window.location.href != "/gateway") window.location.replace("/gateway");
  else if (authentication != "true") return "not authenticated";
  else return "authenticated";
}

checkAuthentication();