hexo.extend.tag.register('fa', function(args) {
    return '<i class="fa ' + args.map(function(arg) { return 'fa-' + arg; }).join(' ') + '"></i>';
});

hexo.extend.tag.register('fas', function(args) {
    return '<i class="fas ' + args.map(function(arg) { return 'fa-' + arg; }).join(' ') + '"></i>';
});

hexo.extend.tag.register('fab', function(args) {
    return '<i class="fab ' + args.map(function(arg) { return 'fa-' + arg; }).join(' ') + '"></i>';
});

hexo.extend.tag.register('far', function(args) {
    return '<i class="far ' + args.map(function(arg) { return 'fa-' + arg; }).join(' ') + '"></i>';
});

hexo.extend.tag.register('fal', function(args) {
    return '<i class="fal ' + args.map(function(arg) { return 'fa-' + arg; }).join(' ') + '"></i>';
});