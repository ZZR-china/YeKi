## YeKi

![夜凯](http://7xrw5x.com1.z0.glb.clouddn.com/yekilogo.jpg)

YeKi for great things

## how to start

*nodejs and mysql is needed!*

```
git clone git@github.com:ZZR-china/YeKi.git

cd YeKi&&yarn install

yarn run dev
```

## 项目结构

```
YeKi
├── bin
│   └── server.js
├── conf
│   └── index.js
│   └── env
│      └── common.js
│      └── development.js
│      └── production.js
├── docs
├── src
│   └── middleware
│   └── models
│   └── resources
│   └── utils
├── README.md
├── Learn.md
├── index.js
├── package.json
├── process.json
├── yarn.lock
```

其中，`index.js` 是 启动文件, `conf` 文件夹是配置文件, 本地数据库配置在`./conf/env/development.js`中
