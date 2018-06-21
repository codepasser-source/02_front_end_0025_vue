import Vue from 'vue'
import VueRouter from 'vue-router'
/** Default layout **/
import _DefaultLayout from './app/layout/default'
/** Screen layout **/
import _ScreenLayout from './app/layout/screen'

/** Laze loading mode **/
console.log('Router > loading', process.env.NODE_ENV);
const _import = require('./router/_import_' + process.env.NODE_ENV);

Vue.use(VueRouter);

const _Router = new VueRouter({
  base: '/',
  mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: [
    //  Index
    {
      path: '',
      name: 'index',
      component: _DefaultLayout,
      meta: {title: '首页', icon: 'dashboard'},
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: _import('dashboard/index')
        },
        {
          path: 'hello',
          name: 'hello',
          component: _import('dashboard/hello')
        }
      ]
    },
    {
      path: '/sign',
      name: 'sign',
      component: _ScreenLayout,
      hidden: true,
      children: [
        {
          path: 'in',
          name: 'sign-in',
          component: _import('sign/in')
        }
      ]
    },
    {path: '/404', component: _import('error/404'), hidden: true},
    {path: '/401', component: _import('error/401'), hidden: true},
    {path: '*', redirect: '/404', hidden: true},
    //  Guide
    {
      path: '/guide',
      name: 'guide',
      component: _DefaultLayout,
      meta: {title: 'Bootstrap - 首页', icon: 'dashboard'},
      children: [
        {
          path: 'bootstrap',
          name: 'bootstrap',
          component: _import('guide/bootstrap/index'),
          children: [
            {
              path: 'started',
              name: 'started',
              component: _import('guide/bootstrap/started')
            },
            {
              path: 'components',
              name: 'components',
              component: _import('guide/bootstrap/components')
            },
            {
              path: 'directive',
              name: 'directive',
              component: _import('guide/bootstrap/directive')
            },
            {
              path: 'reference',
              name: 'reference',
              component: _import('guide/bootstrap/reference')
            },
            {
              path: 'misc',
              name: 'misc',
              component: _import('guide/bootstrap/misc')
            }
          ]
        }
      ]
    }

  ]
});

export default _Router;
