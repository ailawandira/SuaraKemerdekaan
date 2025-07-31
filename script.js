function showMessage() {
  alert("Dirgahayu Republik Indonesia ke-80! Mari teruskan semangat juang para pahlawan dengan berkarya nyata untuk negeri tercinta.");
}

function login() {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const country = document.getElementById("country").value.trim();
  const message = document.getElementById("message");

  message.textContent = "";
  message.className = "message";

  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasNumber || !hasSymbol) {
    message.textContent = "⚠️ Password harus mengandung angka dan simbol.";
    message.classList.add("error");
    return;
  }

  // Jika lolos semua
  message.textContent = `✅ Selamat datang, ${name} dari ${country}!`;
  message.classList.add("success");
}
