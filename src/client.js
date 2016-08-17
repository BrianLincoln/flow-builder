// All JavaScript in here will be loaded client-side

// Expose components globally so ReactJS.NET can use them
// The webpack expose loader will looks at the target folder below
// and run the index.js file to load any components that are required
// for server-side rendering.
require('./style/base.css');

const Components = require('expose?Components!./components');
