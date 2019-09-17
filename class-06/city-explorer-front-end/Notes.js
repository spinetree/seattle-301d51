
// method for including a local file (via node, require belongs to node)
const geoDataresults = require('./data.geo.json); 

// and now we can point at that via geoDataresults.[0].location.lat etc

// try-catch block
// wrap everything inside :

// try {
//     some stuff
// } catch {
//     some stuff if that doesn't work
// }