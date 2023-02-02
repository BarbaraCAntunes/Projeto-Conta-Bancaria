const numeroConta = [];

const dadosFormulario = {
  nome: '',
  cpf: '',
  celular: '',
  senha: '',
  confirmaSenha: '',
  conta: '',
  saldo: 0,
};

function botaoEnviar() {
  dadosFormulario.nome = document.getElementById('nome').value;
  dadosFormulario.cpf = document.getElementById('cpf').value;
  dadosFormulario.celular = document.getElementById('celular').value;
  dadosFormulario.senha = document.getElementById('senha').value;
  dadosFormulario.confirmaSenha = document.getElementById('confirmaSenha').value;
  if (
    dadosFormulario.nome &&
    dadosFormulario.cpf &&
    dadosFormulario.celular &&
    dadosFormulario.senha &&
    dadosFormulario.confirmaSenha
  ) {
    if (dadosFormulario.senha === dadosFormulario.confirmaSenha) {
      numeroConta[0] = new Date().getTime();
      alert(`Sua conta foi aberta com sucesso! O número da sua conta é ${numeroConta[0]}`);
    } else {
      alert('O campo de confirmação de senha deve ser igual ao campo de senha.');
    }
  } else {
    alert('Preencha todos os campos!');
  }
}

function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('celular').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('confirmaSenha').value = '';
}
