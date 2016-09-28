// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    "baseUrl": "js/lib",
    "shim" : {
        "bootstrap" : { "deps" :['jquery'] },
        "jqxcore": { "export": "$", "deps": ['jquery'] },
        "jqxdata": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxbuttons": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxscrollbar": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxlistbox": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxdropdownlist": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxmenu": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxgrid": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxgrid.filter": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxgrid.sort": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxgrid.selection": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxpanel": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "globalize": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxcalendar": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxdatetimeinput": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "jqxcheckbox": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "demo": { "export": "$", "deps": ['jquery', "jqxcore"] },
        "generatedata": { "export": "$", "deps": ['jquery', "jqxcore"] }
    },
    "paths": {
      "app": "../app",
      "jquery" : "jquery-1.11.1.min", //"https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
      "bootstrap" :  "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
      "jqxcore" : "../../../../CollectorTests/jqwidgets/jqxcore",
      "jqxdata" : "../../../../CollectorTests/jqwidgets/jqxdata",
      "jqxbuttons" : "../../../../CollectorTests/jqwidgets/jqxbuttons",
      "jqxscrollbar" : "../../../../CollectorTests/jqwidgets/jqxscrollbar",
      "jqxlistbox" : "../../../../CollectorTests/jqwidgets/jqxlistbox",
      "jqxdropdownlist" : "../../../../CollectorTests/jqwidgets/jqxdropdownlist",
      "jqxmenu" : "../../../../CollectorTests/jqwidgets/jqxmenu",
      "jqxgrid" : "../../../../CollectorTests/jqwidgets/jqxgrid",
      "jqxgrid.filter" : "../../../../CollectorTests/jqwidgets/jqxgrid.filter",
      "jqxgrid.sort" : "../../../../CollectorTests/jqwidgets/jqxgrid.sort",
      "jqxgrid.selection" : "../../../../CollectorTests/jqwidgets/jqxgrid.selection",
      "jqxpanel" : "../../../../CollectorTests/jqwidgets/jqxpanel",
      "globalize" : "../../../../CollectorTests/jqwidgets/globalization/globalize",
      "jqxcalendar" : "../../../../CollectorTests/jqwidgets/jqxcalendar",
      "jqxdatetimeinput" : "../../../../CollectorTests/jqwidgets/jqxdatetimeinput",
      "jqxcheckbox" : "../../../../CollectorTests/jqwidgets/jqxcheckbox",
      "demo" : "../../../../CollectorTests/scripts/demos",
      "generatedata" : "../../../../CollectorTests/demos/jqxgrid/generatedata"
    }

});

// Load the main app module to start the app
requirejs(["app/main"]);
