export const sanitizeContent = (content) =>
	content
		.replaceAll('&nbsp;', ' ')
		.replace(/ +/, ' ')
		.replaceAll('<div><br></div>', '\\n\\n')
		.replaceAll('<div>', '\\n')
		.replaceAll('</div>', '');
