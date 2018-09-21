var app = getApp()
Page({
  data: {
    infoMess: '',
    userName: '',
    userN: '',
    passWd: '',
    passW: '',
    serverUrl:'http://beacon.shinetechchina.com.cn/User/Login',
    weatherInfo:{}
  },
  //用户名和密码输入框事件
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  passWdInput: function (e) {
    this.setData({
      passW: e.detail.value
    })
  },
  //登录按钮点击事件，调用参数要用：this.data.参数；
  //设置参数值，要使用this.setData({}）方法
  loginBtnClick: function () {
    if (this.data.userN.length == 0 || this.data.passW.length == 0) {
      this.setData({
        infoMess: '温馨提示：用户名和密码不能为空！',
      })
    } else {
      this.setData({
        infoMess: '用户名：' + this.data.userN + '密码：' + this.data.passW,
        userName: this.data.userN,
        passWd: this.data.passW
      });
      // var that = this;
      // wx.request({
      //   url: this.data.serverUrl,
      //   method:'POST',
      //   data: { DomainUserName: 'wanghongyin', Email: 'wanghongyin@shinetechchina.com', Password: 'Why*8588', RememberMe: false},
      //   header: {
      //     'content-type': 'application/x-www-form-urlencoded'
      //   },
      //   success:function(re){
      //     if(re.data.status === 200){
      //       that.setData({
      //         weatherInfo: re.data
      //       });
      //     }
      //     console.log(re.data);
      //   }
      // });
    }
  },
  //重置按钮点击事件
  resetBtnClick: function (e) {
    this.setData({
      infoMess: '',
      userName: '',
      userN: '',
      passWd: '',
      passW: '',
    })
  },
  onLoad: function () {
    console.log('onLoad');
  }
})