
({
    getInitData : function(component) {
        component.set("v.showSpinner", true);
        var action = component.get("c.getInitData");

		action.setParams({
            recordId : component.get("v.recordId")
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state == "SUCCESS") {
                var ReturnValue = response.getReturnValue();
                console.log(ReturnValue);

                component.set("v.objChild", ReturnValue["objChild"]);
                component.set("v.recordTypeName", ReturnValue["recordTypeName"]);

                console.log(ReturnValue["listChildPhoto"].length);
                if(ReturnValue["listChildPhoto"].length > 0){
                    var listChildPhoto = ReturnValue["listChildPhoto"];
                    var countPerPage = component.get("v.countPerPage");
                    component.set("v.childImg",listChildPhoto);
                    component.set("v.pageNumber", listChildPhoto.length);
                    component.set("v.maxPage", Math.floor((listChildPhoto.length + (countPerPage - 1)) / countPerPage));
                    this.doRenderPage(component);
                }
            } else if(state === "ERROR") {
                var errors = response.getError();
                if(errors) {
                    if(errors[0] && errors[0].message) this.showToast("error", errors[0].message);
                } else {
                    this.showToast("error", "Unknown error");
                }
            }
            component.set("v.showSpinner", false);
        });
        $A.enqueueAction(action);
    },

    doRenderPage : function(component) {
        var pageNumber = component.get("v.pageNumber");
        var countPerPage = component.get("v.countPerPage");
        var childImg = component.get("v.childImg");

        var pageRecords = childImg.slice((pageNumber - 1) * countPerPage, pageNumber * countPerPage);
        component.set("v.pageRecords", pageRecords);

//        // ContentVersion 임시용
//        var imsi = "/sfc/servlet.shepherd/version/download/" + pageRecords[0].Id;
//        component.set("v.prefixURL", imsi);
    },


    /**
     * @description 토스트 메세지 출력 이벤트 발생
     * @param {string} type 메세지 유형 (success, error, info, warning, other)
     * @param {string} message 토스트에 보여질 메세지
     */
	showToast : function(type, message) {
        var evt = $A.get("e.force:showToast");
        evt.setParams({
            key     : "info_alt",
            type    : type,
            message : message
        });
        evt.fire();
    },
});
