define(["jquery", 'bootstrap', "jqxcore", "jqxdata", "jqxbuttons",
  "jqxscrollbar", "jqxlistbox", "jqxdropdownlist", "jqxmenu", "jqxgrid",
  "jqxgrid.filter", "jqxgrid.sort", "jqxgrid.selection", "jqxpanel",
  "globalize", "jqxcalendar", "jqxdatetimeinput", "jqxcheckbox", "demo",
  "generatedata"], function($) {

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
          udc.startTracking("#jqxgrid", "filter", "")
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

      var para = document.createElement("p");
      var node = document.createTextNode("This is new.");
      para.setAttribute("id", "paraId");
      para.appendChild(node);

      var element = document.getElementById("body1");
      element.appendChild(para);

      var data = generatedata(500);
      var source =
      {
          localdata: data,
          datafields:
          [
              { name: 'firstname', type: 'string' },
              { name: 'lastname', type: 'string' },
              { name: 'productname', type: 'string' },
              { name: 'date', type: 'date' },
              { name: 'quantity', type: 'number' },
              { name: 'price', type: 'number' }
          ],
          datatype: "array"
      };

      var addfilter = function () {
          var filtergroup = new $.jqx.filter();

          var filter_or_operator = 1;
          var filtervalue = 'Beate';
          var filtercondition = 'contains';
          var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

          filtervalue = 'Andrew';
          filtercondition = 'starts_with';
          var filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);

          filtergroup.addfilter(filter_or_operator, filter1);
          filtergroup.addfilter(filter_or_operator, filter2);
          // add the filters.
          $("#jqxgrid").jqxGrid('addfilter', 'firstname', filtergroup);
          // apply the filters.
          $("#jqxgrid").jqxGrid('applyfilters');
      }
      var adapter = new $.jqx.dataAdapter(source);

      $("#jqxgrid").jqxGrid(
      {
          width: 850,
          source: adapter,
          filterable: true,
          sortable: true,
          ready: function () {
              addfilter();
          },
          autoshowfiltericon: true,
          columns: [
            { text: 'First Name', datafield: 'firstname', width: 160 },
            { text: 'Last Name', datafield: 'lastname', width: 160 },
            { text: 'Product', datafield: 'productname', width: 170 },
            { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
            { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
            { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
          ]
      });

      $('#events').jqxPanel({ width: 300, height: 80});

      $("#jqxgrid").on("filter", function (event) {
          $("#events").jqxPanel('clearcontent');
          var filterinfo = $("#jqxgrid").jqxGrid('getfilterinformation');

          var eventData = "Triggered 'filter' event";
          for (i = 0; i < filterinfo.length; i++) {
              var eventData = "Filter Column: " + filterinfo[i].filtercolumntext;
              $('#events').jqxPanel('prepend', '<div style="margin-top: 5px;">' + eventData + '</div>');
          }
      });

      $('#clearfilteringbutton').jqxButton({ height: 25});
      $('#filterbackground').jqxCheckBox({ checked: true, height: 25});
      $('#filtericons').jqxCheckBox({ checked: false, height: 25});
      // clear the filtering.
      $('#clearfilteringbutton').click(function () {
          $("#jqxgrid").jqxGrid('clearfilters');
      });
      // show/hide filter background
      $('#filterbackground').on('change', function (event) {
          $("#jqxgrid").jqxGrid({ showfiltercolumnbackground: event.args.checked });
      });
      // show/hide filter icons
      $('#filtericons').on('change', function (event) {
          $("#jqxgrid").jqxGrid({ autoshowfiltericon: !event.args.checked });
      });
    });

    function lock() {
     $("#status").html('<span class="label label-success glyphicon glyphicon-eye-close" aria-hidden="true"> Locked</span>');
    }

    function release() {
     $("#status").html('<span class="label label-danger glyphicon glyphicon-eye-open" aria-hidden="true"> Open</span>');
    }
  });
});
