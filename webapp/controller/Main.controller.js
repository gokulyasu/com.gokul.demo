sap.ui.define(
  ["./BaseController",
   "sap/m/MessageBox"
],
  function (BaseController, MessageBox) {
    "use strict";

    return BaseController.extend("com.gokul.demo.controller.Main", {
      sayHello: function () {
        MessageBox.show("Hello GokulJanani!");
      },
    });
  }
);
