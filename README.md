# [Introduction to Information Security with HelmetJS Challenges](https://www.freecodecamp.org/learn/information-security/information-security-with-helmetjs/)

Tools: `HelmetJS, NodeJS, ExpressJS`
- X-Powered-By header removed using hidePoweredBy()
- Risk of Clickjacking mitigation using helmet.frameguard()
- XSS attack mitigation using helmet.xssFilter()
- Browser setting to not bypass the provided Content-Type using helmet.noSniff()
- X-Download-Options header setting to noopen for IE using helmet.ieNoOpen()
- Browsers setting to use HTTPS for the future requests using helmet.hsts()
- DNS prefetching disabling by dnsPrefetchControl()
- Caching disabling on client’s browser using helmet.noCache()
- Injection of anything unintended into your page prevention using helmet.contentSecurityPolicy();
