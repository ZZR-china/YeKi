'use strict';

const path = require('path');

// nodejs 运行时全局方法、变量

global.node_env = process.env.NODE_ENV || 'development';

global.rootPath = path.join(__dirname, '/../..')

global.debug = (() => {
    const log = console.log.bind(console);

    return function () {
        log('========================================');
        log.apply(null, Array.from(arguments).map(item => {
            return (typeof item === 'object'
                ? JSON.stringify(item, null, 2)
                : item);
        }));
        log('========================================\n');
    };
})();

global.conf = require('../../conf')
