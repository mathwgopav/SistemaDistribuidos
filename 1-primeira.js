const url = "https://belmondojr.dev/comunicacao.php?";

async function belAPI(url, sensors) {
	try {
		const urlWithParams = new URL(url);
		urlWithParams.searchParams.append("sensors[]", JSON.stringify(sensors));

		const response = await fetch(urlWithParams.href);

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

async function enviarToBel() {
	const sensors = ["temperature"];

	const res = await belAPI(url, sensors);

	if (res) {
		console.log(res);
	}
}

enviarToBel();
