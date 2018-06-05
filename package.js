Package.describe({
    name: 'rd010:flow-router-cakecrumbs',
    version: '0.1.0',
    // Brief, one-line summary of the package.
    summary: 'Better Breadcrumbs For Flow Router',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/robertdavid010/flow-router-breadcrumb.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');

    api.use([
        'templating',
        'underscore',
        'kadira:flow-router@2.2.0'
    ], 'client');

    api.addFiles('flow-router-breadcrumb.js', 'client');
    api.addFiles('flow-router-breadcrumb.html', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('rd010:flow-router-cakecrumbs');
    api.addFiles('flow-router-breadcrumb-tests.js');
});
