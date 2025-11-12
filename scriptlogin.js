    document.getElementById("botao-login").addEventListener("click", () => {
        const email = document.getElementById("login-email");
        const senha = document.getElementById("login-senha");
        const emailErr = document.getElementById("login-email-erro");
        const senhaErr = document.getElementById("login-senha-erro");
        emailErr.textContent = senhaErr.textContent = "";

        if(!email.value.includes("@")) emailErr.textContent = "E-mail inválido.";
        if (senha.value.length < 6) senhaErr.textContent = "Senha muito curta.";
        if (!email.value && !senha.value) emailErr.textContent = senhaErr.textContent = "Este campo não pode ficar vazio."


        if(!emailErr.textContent && !passErr.textContent)
            alert("Login bem-sucedido!");
    });

    function toggleSenha() {
  const input = document.getElementById("login-senha");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
