fis.config.set('modules.optimizer.html', 'html-minifier');

fis.config.set('roadmap.path', [
    {
        reg: 'map.json',
        release: false
    },
    {
        reg: '**',
        url: '/story$&'
    }
]);