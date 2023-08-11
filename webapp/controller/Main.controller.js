sap.ui.define(
  ["./BaseController",
   "sap/m/MessageBox",
   "sap/ui/core/Configuration"
],
  function (BaseController, MessageBox,Configuration) {
    "use strict";

    return BaseController.extend("com.gokul.demo.controller.Main", {
      onInit: function() {
        // Get the Configuration object
        var oConfiguration = new Configuration();
  
        
        // Apply the theme change to the entire application
        sap.ui.getCore().applyTheme("sap_horizon");
      },
      sayHello: function () {
        MessageBox.show("Hello GokulJanani!");
      },
      changeTheme:function(oEvent){
        if(oEvent.getParameter("state")){
          Configuration.setTheme("sap_horizon_dark");
        }else {
          Configuration.setTheme("sap_horizon");
        }


        
      }
    });
  }
);
