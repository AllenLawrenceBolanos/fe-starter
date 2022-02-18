const fs = require("fs");
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static("public"));

server.use("/api/dashboard", function (req, res) {
  const dashboardData = JSON.parse(fs.readFileSync("data.json"));
  res.send(dashboardData).status(200).end();
});

server.listen(PORT, function () {
  console.log(`Server is now listening on port ${PORT}`);
});

window.fbAsyncInit = function() {
  FB.init({
    appId      : '679443763092283',
    xfbml      : true,
    version    : 'v13.0'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
