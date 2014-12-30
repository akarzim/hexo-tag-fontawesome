hexo.extend.tag.register('fa', function(args) {
    return '<i class="fa ' + args.map(function(arg) { return 'fa-' + arg; }).join(' ') + '"></i>';
});
