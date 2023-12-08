const url = "https://belmondojr.dev/sensores.php";

async function belAPI(url) {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Erro, status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Erro:", error.message);
		return null;
	}
}

async function analyzeSensors() {
	const sensors = await belAPI(url);

	if (sensors) {
		console.log("Dados do sensor para análise:", sensors);

		console.log("Análise 🤔 - Temperatura:", sensors.temperature);
		console.log("Análise 🤔 - Umidade:", sensors.humidity);
		console.log("Análise 🤔 - Pressão:", sensors.pressure);
	}
}
analyzeSensors();
