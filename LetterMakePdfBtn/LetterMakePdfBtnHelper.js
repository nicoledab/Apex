/**
 * Created by dw.lee on 2022-03-17.
 */

({
    doValidationCheck : function(component, event){
        var action = component.get("c.doValidationCheck");
        action.setParams({
            actionName : 'PDF',
            letterId : component.get("v.listSelectedId")
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(state);
            if(state == "SUCCESS") {
                var result = response.getReturnValue();
                console.log(result);

                var resultMsg = result.split('^||^');
                if(resultMsg[0] == 'success') {
                    console.log('aa');
                    component.set("v.isPDFCk", true);
                }
                else {
                    console.log('bb');
                    this.showToast(resultMsg[0], resultMsg[1]);
                    component.set("v.isPDFCk", false);
                    var navEvent = $A.get("e.force:navigateToList");
                    navEvent.setParams({
                        "scope": "Letter__c"
                    });
                    navEvent.fire();
                }
            } else if(state === "ERROR") {
                var errors = response.getError();
                if(errors) {
                    if(errors[0] && errors[0].message) this.showToast("error", errors[0].message);
                } else {
                    this.showToast("error", "Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    doCreatedPDF : function(component, event){
        var action = component.get("c.doCreatedPDF");
        action.setParams({
            letterId : component.get("v.listSelectedId")
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(state);
            if(state == "SUCCESS") {
                var result = response.getReturnValue();
                console.log(result);

                var resultMsg = result.split('^||^');
                if(resultMsg[0] == 'success') {
                var downloadUrl = resultMsg[1];
                var totalIdSet = component.get("v.listSelectedId");
//                var visualforceUrl = '/apex/PouchMemo?setSelectedId='+ JSON.stringify(totalIdSet);
                window.open(downloadUrl);
//                window.location.href = visualforceUrl;
                }
                else {
                    console.log('bb');
                    this.showToast(resultMsg[0], resultMsg[1]);
                }
                var navEvent = $A.get("e.force:navigateToList");
                navEvent.setParams({
                    "scope": "Letter__c"
                });
                navEvent.fire();

            } else if(state === "ERROR") {
                var errors = response.getError();
                if(errors) {
                    if(errors[0] && errors[0].message) this.showToast("error", errors[0].message);
                } else {
                    this.showToast("error", "Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    showToast : function(type, message) {
        var evt = $A.get("e.force:showToast");
        evt.setParams({
            key     : "info_alt",
            type    : type,
            message : message
        });
        evt.fire();
    },

    // Null , Undefined , '' 체크
    isNullCheck : function(value){
        if(value == null || value == undefined || value == ""){
            return true;
        }
        else{
            return false;
        }
    },
});