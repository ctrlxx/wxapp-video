const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wxd9ae4d926f15bee7',

    // 微信小程序 App Secret
    appSecret:'0944cdff70fca7c37bc457542eeab51d',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,
    
    qcloudAppId:'1251321471',

    qcloudSecretId:'AKIDdBfP3ZDAbCpKmhFniT3TiaJrKer5chP8',
    
    qcloudSecretKey:'kgh8RingFm8WyJWmT2aSFxjgimvzEMME',
    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wxd9ae4d926f15bee7',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-shanghai',
        // Bucket 名称
        fileBucket: 't-movies',
        // 文件夹
        uploadFolder: '',
        mimetypes: ['audio/x-aac', 'audio/mpeg', 'video/webm', 'audio/mpeg', 'audio/mp3', 'audio/m4a']
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
