import _Router from '../../router'

console.log('Permission > loading');
_Router.beforeEach((to, from, next) => {
  // console.log('permission beforeEach>', to, from, next);
  next()
});

_Router.afterEach((to, from) => {
  // console.log('permission afterEach>', to, from);
});