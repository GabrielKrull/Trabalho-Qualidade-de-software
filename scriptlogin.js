    document.getElementById("botao-login").addEventListener("click", () => {
        const email = document.getElementById("login-email");
        const senha = document.getElementById("login-senha");
        const emailErr = document.getElementById("login-email-erro");
        const passErr = document.getElementById("login-senha-erro");
        emailErr.textContent = passErr.textContent = "";

        if(!email.value.includes("@")) emailErr.textContent = "E-mail inválido.";
        if (senha.value.length < 6) passErr.textContent = "Senha muito curta.";

        if(!emailErr.textContent && !passErr.textContent)
            alert("Login bem-sucedido!");
    });
