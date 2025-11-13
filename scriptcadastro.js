document.getElementById("botao-cadastro").addEventListener("click", () => {
    const nome = document.getElementById("cadastro-nome");
    const email = document.getElementById("cadastro-email");
    const senha = document.getElementById("cadastro-senha");
    const confirm = document.getElementById("cadastro-confirmar-senha");

    const nomeErr = document.getElementById("cadastro-nome-erro");
    const emailErr = document.getElementById("cadastro-email-erro");
    const senhaErr = document.getElementById("cadastro-senha-erro");
    const confirmErr = document.getElementById("cadastro-confirmar-senha-erro");

    nomeErr.textContent = emailErr.textContent = senhaErr.textContent = confirmErr.textContent = "";

    if (nome.value.trim().length < 3) nomeErr.textContent = "Nome muito curto.";
    if(!email.value.includes("@")) emailErr.textContent = "E-mail inválido"; 
    if(senha.value.length < 6) senhaErr.textContent = "A senha deve ter pelo menos 6 caracteres.";
    if(senha.value !== confirm.value) confirmErr.textContent = "As senhas não coincidem.";

    if(!nomeErr.textContent && !emailErr.textContent && !senhaErr.textContent && !confirmErr.textContent)
        alert("Cadastro realizado com sucesso!");

    
});

function toggleSenha() {
  const input = document.getElementById("cadastro-senha");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

function toggleConfirmarSenha() {
  const input = document.getElementById("cadastro-confirmar-senha");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}