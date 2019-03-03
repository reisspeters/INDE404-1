window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1434343309',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '1434343309.1677ed0.f3893af475364d35a13698e3feefec83',
        sortBy: 'most-recent',
        template: '<div class="col-lg-2 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    $(".gallery-img").click(function(){
      var t = $(this).attr("src");
      $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
      $("#myModal").modal();


});
