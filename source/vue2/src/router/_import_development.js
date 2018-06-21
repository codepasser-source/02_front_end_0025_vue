// vue-loader at least v13.0.0+
//module.exports = file => require('@/app/views/' + file + '.vue').default;

// laze load
module.exports = file => () => import('@/app/views/' + file + '.vue');