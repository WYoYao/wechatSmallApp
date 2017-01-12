module.exports = {
    show: function (cfg) {
        this.setData({
            message: {
                content: "123456",
                icon: cfg.icon,
                visiable: true
            }
        })
    },
    hide: function () {
        this.setData({
            message: Object.assign(this.data.message, {
                visiable: false
            })
        })
    }

}