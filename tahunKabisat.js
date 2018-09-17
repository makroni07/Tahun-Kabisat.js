function tahunKabisat(angka) {
	if (angka % 4 === 0) {
		console.log(angka + "ini tahun kabisat")
	}
	else{
		console.log(angka + "" + "ini bukan tahun kabisat")
	}
}
console.log(tahunKabisat(2012))