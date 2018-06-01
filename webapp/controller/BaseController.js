sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
	], function(Controller, History){
		"use strict";
		return Controller.extend("LicensedToCode.controller.BaseController",{
			
			onMenu: function(oEvent){
				this.getOwnerComponent()._oSplitApp = this.byId("idAppControl");
				var oSplitApp = this.getOwnerComponent()._oSplitApp;
				if(oSplitApp.isMasterShown()){
					oSplitApp.hideMaster();
				}
				else{
					oSplitApp.showMaster();
				}
			},
			getRouter: function(oEvent){
				return sap.ui.core.UIComponent.getRouterFor(this);          
			},
			onHome: function(oEvent){
				this.getRouter().navTo("home",null,true);
			},
			onProjects: function(oEvent){
				this.getRouter().navTo("projects",null,true);
			},
			onClients: function(oEvent){
				this.getRouter().navTo("clients",null,true);
			},
			onServices: function(oEvent){
				this.getRouter().navTo("sevices",null,true);
			},
			onContact: function(oEvent){
				this.getRouter().navTo("contact",null,true);
			},
			onAbout: function(oEvent){
				this.getRouter().navTo("about",null,true);
			}
	
			
				
				
			
		});
	});