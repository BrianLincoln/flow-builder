// Expose components globally so ReactJS.NET can use them
// The webpack expose loader will looks at the target folder below
// and run the index.js file to load any components that are required
// for server-side rendering

const Components = require('expose?Components!./components');
