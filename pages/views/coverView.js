Page({
  data: {
    videoPath: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    showText:'',
    videoInfo: { tempFilePath: '', duration:0,size:0,height:0,width:0}
  },

  videoControl:null,

  onReady() {
    this.videoControl = wx.createVideoContext('myVideo');
    this.videoControl.requestFullScreen();
  },
  play() {
    this.videoControl.play();
  },
  pause() {
    this.videoControl.pause();
  },
  selectSource:function(){
    var that = this;
    wx.chooseVideo({
      sourceType:['album','camera'],
      camera:'back',
      maxDuration:60,
      success(res){
        console.log(res.tempFilePath);
        that.setData({
          videoPath:res.tempFilePath,
          videoInfo:res,
          showText:"3秒后开始播放"
        });
        setTimeout(function(){
          that.play();
          that.setData({
            showText: "播放..."
          });
        },3000)
      }
    })
  }
})