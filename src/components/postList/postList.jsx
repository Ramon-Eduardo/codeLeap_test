import { useState } from "react";
import "./styles.css"

const Post = ({ setTab, setClients }) => {

    // Estados locais para armazenar os dados do formulário
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    // Função que é executada ao enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Cria o objeto com os dados do cliente preenchidos no formulário
        let postdata = { title, comment };

        // Adiciona o novo cliente à lista existente
        setClients((prevList) => [...prevList, postdata]);

        // Limpa os campos do formulário após o envio
        setTitle('');
        setComment('');
        // Alterna para a aba de listagem de clientes
        setTab('list');
    }
}

export default function PostList() {

}