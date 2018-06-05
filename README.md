# Better Breadcrumbs For Flow Router

*This is a fork of the inactive flow-router-breadcrumb meteor package*
(https://github.com/thearabbit/flow-router-breadcrumb)[https://github.com/thearabbit/flow-router-breadcrumb]

## Install
```js
meteor add rd010:flow-router-cakecrumbs
```

## Usage
### Register

```js
// Level 1
FlowRouter.route('/level1', {
    name: 'level1',
    action: function (params, queryParams) {
        Layout.main('level1');
    },
    breadcrumb: {
        title: 'Level 1',
    }
});

// Level 2
FlowRouter.route('/level2', {
    name: 'level2',
    action: function (params, queryParams) {
        Layout.main('level2');
    },
    breadcrumb: {
        title: 'Level 2',
        parent: 'level1'
    }
});

// Level 3
FlowRouter.route('/level3/:level2Id', {
    name: 'level3',
    action: function (params, queryParams) {
        Layout.main('level3');
    },
    breadcrumb: {
        params: 'level2Id',
        queryParams: ['show', 'color'],
        title: 'Level 3',
        parent: 'level2'
    }
});

// Level 4
FlowRouter.route('/level4/:level2Id/:level3Id', {
    name: 'level4',
    action: function (params, queryParams) {
        Layout.main('level4');
    },
    breadcrumb: {
        params: ['level2Id', 'level3Id'],
        queryParams: ['show', 'color'],
        title: 'Level 4',
        parent: 'level3'
    }
});
```

In addition to normally defining breadcrumbs as expected, flow-router-cakecrumbs allows assigning routes to application archtecture 'levels', which will then be tracked and rendered dynamically based on the number of levels being displayed.

```js
FlowRouter.route('/level1', {
    name: 'level1',
    action: function (params, queryParams) {
        Layout.main('level1');
    },
    breadcrumb: {
        title: 'Level 1',
        level: 'levelname'
    }
});
```

And when configuring the cakecrumbs package, you configure the levels

config.js
```js
Breadcrumb.Config = {
    homeRoute: "home",
    maxLevels: 4,
    levelsConfig: {
        "listLevel": {
            depth: 1,
            order: 1,
            priority: 1
        },
        "detailsLevel": {
            depth: 2,
            order: 1,
            priority: 2
        },
        "inputLevel": {
            depth: 1,
            order: 1,
            priority: 3
        }
    }
};
```

The level name can be defined along with the depth of history for each level to track, the order they are tracked in, and the priority. The priority affects the order in which the crumbs are displayed.


### Render

```js
<!--Render with bootstrap 3-->
{{> breadcrumb}}

<!--Render with custom-->
<ol class="breadcrumb">
    {{#each breadcrumb}}
        {{#if activeClass}}
            <li class="{{activeClass}}">{{title}}</li>
        {{else}}
            <li><a href="{{url}}">{{title}}</a></li>
        {{/if}}
    {{/each}}
</ol>
```