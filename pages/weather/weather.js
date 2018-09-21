// pages/weather/weather.js
var app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    currentCity:'西安市',
    weatherInfo: { data: {yesterday:''}},
    historyCities: ['西安市', '南阳', '韩城', '北京', '上海', '广州']
  },

  onShow: function () {
    this.search();
  },

  cityInput:function(e){
    this.setData({
      currentCity:e.detail.value
    });
  },

  search:function(){
    if (this.data.currentCity!==''){
      this.getWeatherInfo(this.data.currentCity);
    }
  },

  historyCityClick:function(e){
    this.setData({
      currentCity: e.target.dataset.value
    });
    this.getWeatherInfo(this.data.currentCity);
  },

  getWeatherInfo:function(city){
    var that = this;
    wx.request({
      url: 'https://www.sojson.com/open/api/weather/json.shtml?city=' + city,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (re) {
        if (re.data.status === 200) {
          re.data.data.yesterday.low = app.formatLowAndHigh(re.data.data.yesterday.low);
          re.data.data.yesterday.high = app.formatLowAndHigh(re.data.data.yesterday.high);
          for (var index in re.data.data.forecast) {
            re.data.data.forecast[index].low = app.formatLowAndHigh(re.data.data.forecast[index].low);
            re.data.data.forecast[index].high = app.formatLowAndHigh(re.data.data.forecast[index].high);
          }
          that.setData({
            weatherInfo: re.data
          });
        }
        console.log(re.data);
      }
    });
  },

  getLocation:function(){
    var page = this
    wx.getLocation({
      success: function(res) {
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      },
    })
  },

  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=n5cgPiO7HeAGb966HKTYDCvXrAliEcXN&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var city = res.data.result.addressComponent.city;
        page.setData({ currentCity: city });
      },
      fail: function () {
        page.setData({ currentCity: "获取定位失败" });
      }
    })
  }
})