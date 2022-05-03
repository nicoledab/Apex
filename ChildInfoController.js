/**
 * Created by dw.lee on 2021-09-27.
 */

({
    fnInit : function(component, event, helper) {
        helper.getInitData(component);
    },

    // 사진 페이지
    fnRenderPage : function(component, event, helper) {
        helper.doRenderPage(component);
    },

    // 이미지 클릭 시
    fnImageView : function(component, event, helper){
        var target = event.currentTarget;
        var targetId = target.dataset.id;
        component.set('v.imageSrc', targetId);
        component.set('v.isModalYN', true);
    },

    // 이미지 팝업 Cancel
    fnModalCancel : function(component, event, helper){
        component.set('v.isModalYN', false);
    },
});
