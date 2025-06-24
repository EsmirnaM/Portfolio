<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $mensagem = $_POST["mensagem"];

    // Configurações de envio de email
    $to = "esmirnaamneris@gmail.com"; 
    $subject = "Novo contato pelo formulário";
    $message = "Nome: " . $nome . " " . $sobrenome . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Telefone: " . $telefone . "\n";
    $message .= "Mensagem: " . $mensagem . "\n";
    $headers = "From: " . $email;

    // Envie o email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar o email.";
    }
}
?>