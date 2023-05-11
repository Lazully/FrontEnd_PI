alert('Olá! Seja bem-vindo ao nosso site.');

document.addEventListener("DOMContentLoaded", function() {
  var btnMenu = document.getElementById("IrParaMenu");

  btnMenu.addEventListener("click", function() {
    window.location.href = "menu.html";
  });
  var btnCadastrar = document.getElementById("IrParaCadastro");

  btnCadastrar.addEventListener("click", function() {
    window.location.href = "cadastro.html";
  });
  var passwordInput = document.getElementById("password");
  var passwordHelpInline = document.getElementById("passwordHelpInline");

  passwordInput.addEventListener("input", function() {
    var senha = passwordInput.value;
    var padrao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (padrao.test(senha)) {
      passwordHelpInline.textContent = "Senha válida";
      passwordHelpInline.style.color = "green";
    } else {
      passwordHelpInline.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.";
      passwordHelpInline.style.color = "red";
    }
  });
});