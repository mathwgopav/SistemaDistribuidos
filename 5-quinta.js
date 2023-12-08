const url = "https://belmondojr.dev/ordenacao.php";

async function ordenaAiBel(algoritmo, vetor) {
	try {
		const urlWithParams = new URL(url);
		urlWithParams.searchParams.append("method", algoritmo);
		vetor.forEach((valor) => {
			urlWithParams.searchParams.append("vector[]", valor);
		});

		const response = await fetch(urlWithParams.href);

		if (!response.ok) {
			throw new Error(`Erro, status:  ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Erro:", error.message);
		return null;
	}
}

async function enviarToBel() {
	const method = "mergeSort";
	const vector = [5, 2, 1];
	const res = await ordenaAiBel(method, vector);

	if (res) {
		console.log("Vetor ordenado:", res.sortedVector);
	}
}

enviarToBel();
