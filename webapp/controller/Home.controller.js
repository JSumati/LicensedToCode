sap.ui.define([
	"LicensedToCode/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("LicensedToCode.controller.Home", {
		onInit: function(){
				this.getOwnerComponent()._oSplitApp = this.byId("idAppControl");
				var oSplitApp=this.getOwnerComponent()._oSplitApp;
				oSplitApp.hideMaster();
		
				//Smooth Scroll
			
					$(document).ready(function(){
					var delay = false;
					$(document).on('mousewheel', function(oEvent){
						oEvent.preventDefault();
						if(delay) return;
						delay = true;
						setTimeout(function(){delay = false; }, 2000);
						var wd = oEvent.originalEvent.wheelDelta;
						var a = document.getElementById('meraNaam');
						if(wd<0){
							for(var i=0; i<a.length;i++){
								var t = a[i].getClientRects()[0].top;
								if(t >= 40) break;
							}
						}else{
							for(var i=a.length-1;i>=0;i--){
								var t = a[i].getClientRects()[0].top;
								if(t < -20) break;
							}
						}
						if(i>=0 && i<a.length){
							$('#meraNaam').animate({
								scrollTop: a[i].offsetTop
							});
						}
					});
				});
		}
	});
});