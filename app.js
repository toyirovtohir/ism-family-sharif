function ajrat() {
    let full = document.getElementById("full").value.trim();

    // Matnni bo'shliqlar bo'yicha bo'lish
    let qismlar = full.split(" ");

    let ism = qismlar[0] || "";
    let familya = qismlar[1] || "";
    let sharif = qismlar[2] || "";

    document.getElementById("chiqIsm").innerText = ism;
    document.getElementById("chiqFamilya").innerText = familya;
    document.getElementById("chiqSharif").innerText = sharif;
}
