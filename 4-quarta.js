const url = "https://belmondojr.dev/proc_paralelo.php";

async function belAPI(url, mA, mB) {
	try {
		const urlWithParams = new URL(url);
		urlWithParams.searchParams.append("matrixA", JSON.stringify(mA));
		urlWithParams.searchParams.append("matrixB", JSON.stringify(mB));

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
	const mA = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];

	const mB = [
		[9, 8, 7],
		[6, 5, 4],
		[3, 2, 1],
	];

	const res = await belAPI(url, mA, mB);

	if (res) {
		console.log("Resultado da multiplicaçao:");
		console.table(res.result);
	}
}

enviarToBel();
