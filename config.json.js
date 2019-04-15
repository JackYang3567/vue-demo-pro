 const config = {
    /**
     * built-in config
     * @type {Vue config}
     **/

   APIURL:[ 
            {
                // 静态化访问前缀,如：`http://192.168.33.10:7001/api/user`
                protocol: 'http', //协议 http/https
                domin:  '192.168.33.10',//ip地址或域名
                port: '7001', // 端口；
                prefix: 'api' //前缀
            }
        ],
}

module.exports=config
  