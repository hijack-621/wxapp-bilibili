Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    currentIndex:0,
    swiperList:[],
    videoList:[]
  },

  changeNavIndex (e) {
    this.setData({
      currentIndex: e.target.dataset.index
      // e.target 得到点击的dom dataSet 自定义属性的集合
    })
  },

  requestSwiperData (that) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success (res) {
        if(res.data.code ===0) {
          that.setData({
            swiperList: res.data.data.swiperList 
          })
        }
      }
    })
  },

  requestVideo (that) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success (res) {
        if(res.data.code ===0 ) {
          that.setData({
            videoList: res.data.data.videoList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    // 发送请求后 this指向改变 所以需要外面保存this。
    wx.request({ // 微信自带的发送请求的api
      url:"http://mock-api.com/mnEe4VnJ.mock/navList",
      success(res){
        //console.log(res);
        if(res.data.code ===0 ) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    }),
    this.requestSwiperData(that);
    this.requestVideo(that);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})