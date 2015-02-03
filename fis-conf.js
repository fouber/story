fis.config.set('project.exclude', 'node_modules/**');
fis.config.set('modules.optimizer.html', 'html-minifier');
fis.config.set('roadmap.path', [
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