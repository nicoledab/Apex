({

    fnInit : function(component, event, helper){
        helper.doValidationCheck(component, event);
    },

    fnCreatedPDF : function(component, event, helper){
        helper.doCreatedPDF(component, event);
    },

});