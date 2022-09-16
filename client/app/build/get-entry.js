const fs = require('fs')

const getEntry = () => {
	const entry = {}
	const views = fs.readdirSync('./src/views')
	views.forEach(view => {
		entry[view] = `./src/views/${view}/index.js`
	})
	return entry
}

module.exports = getEntry