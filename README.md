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

## 玩法

1.玩家注册登陆后，可以选择房间进入，每个房间最多3人

2.每个房间有谜题，玩家进入后可以解密，解出谜题则离开房间，积分增加（暂时固定为拆引线，红白绿黄四根引线，拆对了则离开房间）

3.解不出的将和另外一个房间的人进行投票，投票是否将另一房间炸毁

4.都投炸毁则两个房间全部炸毁掉；都投不炸则两个房间都存活，用户得到大量积分；一边投炸，一边投不炸则投炸的那一方或者投不炸的那一方炸掉，一切看小丑的抉择，没炸的那一方获得大量积分，被炸的那一方获得小丑之魂，可以选择投放到小丑中，影响下次小丑的抉择

5.积分可以用来消耗制止小丑，两个房间的人都能得到安全，但是不会获得积分
