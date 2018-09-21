// pages/formControls/formControls.js
var app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    jobs: [{ id: 1, name: "教师" }, { id: 2, name: "IT 工程师" }, { id: 3, name: "销售经理" }, { id: 4, name: "司机" }],
    jobindex: 2,
    birthdate: app.getNowFormatDate()
  },

  formSubmit: function (e) {
    console.log(e.detail.value);
  },

  formReset: function () {
    console.log('form reset');
  },

  checkboxChange: function (e) {
    console.log(e.detail.value);
  },

  bindjobchange:function(e){
    this.setData({
      jobindex:e.detail.value
    });
  },

  bindbirthdatechange:function(e){
    this.setData({
      birthdate:e.detail.value
    });
  },

  genderChange: function (e) {
    console.log(e.detail.value);
  },

  bindenabledchange:function(e){
    console.log(e.detail.value);
  }
})