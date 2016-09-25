"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
// Exports the routing constant initialized above using 'RouterModule.forRoot' method to array of Routes
// Method returns a configured router module that we'll add to root NgModule, AppModule
exports.routing = router_1.RouterModule.forRoot(appRoutes);
// 'forRoot' method is called b/c we're providing a configured router at the root of the app.
// ^ => gives us the Router service providers and directives needed for routing.
//# sourceMappingURL=app.routing.js.map