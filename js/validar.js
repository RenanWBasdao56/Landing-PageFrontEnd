// Validações e Tratativas de Campos.
function ValidarFormulario(){
    if(document.form.name.value == ''){
        alert("Preencher o campo obrigatório Nome!");
        document.form.name.focus();
        return false;
    }

    if(document.form.email.value == ''){
        alert("Preencher o campo obrigatório E-mail!");
        document.form.email.focus();
        return false;
    }

    if(document.form.ass.value == ''){
        alert("Preencher o campo obrigatório Assunto!");
        document.form.ass.focus();
        return false;
    }

    if(document.form.msg.value == ''){
        alert("Preencher o campo obrigatório Mensagem!");
        document.form.msg.focus();
        return false;
    }
}