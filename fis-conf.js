fis.config.set('project.exclude', 'node_modules/**');
fis.config.set('modules.optimizer.html', 'html-minifier');
fis.config.set('roadmap.domain', 'http://7vihhr.com1.z0.glb.clouddn.com');
fis.config.set('roadmap.path', [
    {
        reg: /\/_[^\/]+$/,
        release: false
    },
    {
        reg: 'map.json',
        release: false
    },
    {
        reg: '**.md',
        release: false
    },
    {
        reg: '**',
        url: '/story$&'
    }
]);