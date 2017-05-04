/*
	https://docs.api.ai/docs/webhook#section-format-of-response-from-the-service
*/

module.exports.copycat = (req, res) => {
	var query = req.body.result.resolvedQuery
	console.log('copycat', query)
	res.send({speech: query, displayText: query})
}

