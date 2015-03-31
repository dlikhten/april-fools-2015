(function() {
  var urls = [
    "https://donorschoose.app.box.com/representation/file_version_26784109090/image_2048_jpg/1.jpg",
    "https://donorschoose.app.box.com/representation/file_version_26784110622/image_2048_jpg/1.jpg",
    "https://donorschoose.app.box.com/representation/file_version_26784111610/image_2048_jpg/1.jpg",
    "https://donorschoose.app.box.com/representation/file_version_26783709776/image_2048_jpg/1.jpg"
  ];

  var url = urls[Math.floor(Math.random() * (3 - 0)) + 0];

  $("body").css("background-image", "url("+url+")").css("background-position","center");
})();
