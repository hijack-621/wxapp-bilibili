// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    recommend: []
  },

  getVideoInfo (that) {
    wx.request({
      url:'http://mock-api.com/mnEe4VnJ.mock/videoDetail',
      success (res) {
        if(res.data.code === 0 ) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },

  getRecommend (that) {
    wx.request({
      url: "http://mock-api.com/mnEe4VnJ.mock/otherList",
      success (res) {
        if( res.data.code === 0) {
          that.setData({
            recommend: res.data.data.otherList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * options 可接收地址栏传递的参数！！
   */
  onLoad: function (options) {
    const that = this;
    that.getVideoInfo(that);
    that.getRecommend(that);
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