const url = "https://belmondojr.dev/compra.php?";

async function belAPI(url, products, values) {
	try {
		const urlWithParams = new URL(url);
		for (let i = 0; i < products.length; i++) {
			urlWithParams.searchParams.append(
				"products[]",
				encodeURIComponent(products[i])
			);
			urlWithParams.searchParams.append(
				"values[]",
				encodeURIComponent(values[i])
			);
		}

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
	const products = ["COCA-COLA", "BAURU NO CAPRIXO"];
	const values = [5.5, 8.9];

	const res = await belAPI(url, products, values);

	if (res) {
		console.log(`Nota Fiscal: PRODUTO     PREÇO`);
		products.map((p, i) => {
			console.log(`${p} ******************** ${values[i]}`);
		});
		console.log("TOTAL ******************* ", res.totalAmount);
	}
}

enviarToBel();
