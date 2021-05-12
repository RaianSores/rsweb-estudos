import React from 'react';
import styles from '../CadPeople/styles.module.scss'

const CadPeople = () => {
    return (
        <div className={styles.containerPeople}>
            <form className="formulario" method="post">

                <h1> Cadastro de Pessoa </h1>

                <div>
                    <label htmlFor="cpf_cnpj">CPF / CNPJ:</label>
                    <input type="text" id="cpf_cnpj" name="cpf_cnpj" placeholder="Digite o CNPJ ou CPF" required />
                </div>

                <div>
                    <label htmlFor="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
                </div>

                <div>
                    <label htmlFor="logradouro">Endereço completo:</label>
                    <input type="text" id="logradouro" name="logradouro" placeholder="Digite o logradouro" required />
                </div>

                <div>
                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" placeholder="Digite o nome da Cidade" required />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" id="email" name="email" placeholder="Digite seu e-mail" required />
                </div>

                <div>
                    <label htmlFor="contato">Telefone para contato:</label>
                    <input type="text" id="contato" name="contato" placeholder="Digite seu telefone" required />
                </div>
                <div className="btnSalvar">
                    <input type="submit" value="Gravar"/>
                </div>
            </form>
        </div>
    )
}

export default CadPeople
