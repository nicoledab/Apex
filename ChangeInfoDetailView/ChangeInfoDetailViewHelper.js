


({
    getInitData : function(component) {
        var action = component.get("c.getInitData");
        var F2FCode = '';

        action.setParams({
            "strId" : component.get("v.recordId"),
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            var returnValue = response.getReturnValue();
            if (state === "SUCCESS") {
                component.set("v.recordTypeName", returnValue[0]["RecordType"]["Name"]);
                console.log('recordType : ' + component.get("v.recordTypeName"));
                var objRD = returnValue[1];
                if(objRD["F2FCode__c"] != null){
                    objRD["F2FCode"] = returnValue[1]["F2FCode__r"]["Name"];
                }
                if(objRD["BankCardName__c"] != null){
                    objRD["BankCardName"] = returnValue[1]["BankCardName__r"]["Name"];
                }
                if(objRD["SCKAccount__c"] != null){
                    objRD["SCKAccount"] = returnValue[1]["SCKAccount__r"]["Name"];
                }
                if(objRD["VirtualAccountNo__c"] != null){
                    objRD["VirtualAccountNo"] = returnValue[1]["VirtualAccountNo__r"]["Name"];
                }
                objRD["NotAgreeGiro__c"] = true;
                console.log('objRD : ' + JSON.stringify(objRD));
                component.set("v.objRD", objRD);
            }else if(state === "ERROR") {
                var errors = response.getError();
                if(errors) {
                    console.log('Errors : ' + JSON.stringify(errors));
                } else {
                    this.showToast("error", "Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
});