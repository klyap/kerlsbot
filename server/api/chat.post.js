export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	let messages = [];
	const previosMessages = await readBody(event);
	messages = messages.concat(previosMessages);
	let prompt =
		messages.map((message) => `${message.role.toLowerCase()}: ${message.message}`).join('\n') + `\nAI:`;
	let messageList = messages.map((message) => ({ role: message.role.toLowerCase(), content: message.message }))
    const req = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${config.OPENAI_API_KEY}`
		},
		body: JSON.stringify({
			// model: 'gpt-3.5-turbo',
      model: config.MODEL_ID,
			// prompt: prompt,
			temperature: config.TEMP || 0.8,
			max_tokens: 512,
			// top_p: 1.0,
			// frequency_penalty: 0,
			// presence_penalty: 0.6,
      messages: messageList
		})
	});

	const res = await req.json();
  console.log(res);

	const result = res.choices[0];
	return {
		message: result.message.content,
	};
});
