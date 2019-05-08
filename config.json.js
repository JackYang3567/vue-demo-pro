 const DOMIN  = '192.168.33.10'//ip地址或域名
 const PREFIX = 'api/v2'        //前缀
 const PORT   = '7001'            //'7001', // 端口；

 const __PORT = (PORT != '80')? `:${PORT}`:``


 const config = {
    /**
     * built-in config
     * @type {Vue config}
     **/
   AIP_PREFIX: `//${DOMIN}${__PORT}/${PREFIX}`,
   SIGNIN_CAPTCHA: `//${DOMIN}${__PORT}/captcha/1`,
   SIGNUP_CAPTCHA: `//${DOMIN}${__PORT}/captcha/0`,
  
}

module.exports=config
  