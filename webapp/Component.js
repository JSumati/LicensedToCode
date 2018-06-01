sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"LicensedToCode/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("LicensedToCode.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});