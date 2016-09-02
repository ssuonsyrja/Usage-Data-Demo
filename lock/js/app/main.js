define(["jquery"], function($) {

  $(function() {

    // Function for getting URL parameters
    function GetURLParameter(sParam){
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++)
      {
          var sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] == sParam)
          {
              return sParameterName[1];
          }
      }
    }

    // Get the analytics parameter from the URL's end==> "/?analytics=on"
    var analytics = GetURLParameter('analytics');

    // If analytics is on..
    if (analytics=="on"){

      require(['../../Usage-Data-Collector/UDC/app/scripts/udc.js'], function (UDC) {
          var udc = new UDC;
          udc.startTracking("body", "click", "input");
      });


      //define(["../../UDC/app/scripts/udc.js"], function(UDC) {


        //var fileref=document.createElement('script')
        //fileref.setAttribute("type","text/javascript")
        //fileref.setAttribute("src", "../../UDC/app/scripts/udc.js")
      //});
    };

    // ..include the analytics-script to the HTML document.
    //if (typeof fileref!="undefined"){
    //    document.getElementsByTagName("head")[0].appendChild(fileref)
    //};

    $(document).ready(function () {

      $("#button1").click(
          function () {
              lock();
          }
      );
      $("#button2").click(
          function () {
              release();
          }
      );
    });

    function lock() {
     $("#status").html('<span class="label label-success glyphicon glyphicon-eye-close" aria-hidden="true"> Locked</span>');
    }

    function release() {
     $("#status").html('<span class="label label-danger glyphicon glyphicon-eye-open" aria-hidden="true"> Open</span>');
    }
  });
});
