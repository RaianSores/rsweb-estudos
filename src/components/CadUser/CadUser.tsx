import * as React from "react";
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

import styles from '../CadUser/CadUser.module.scss';

export default function CadUser() {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const { user, signInWithGoogle } = useAuth();

    const onSubmit = data => console.log(data);

    async function handleRegistration() {
        if(!user) {
            await signInWithGoogle();
        }
        history.push('/Login');
    }

    return (
        <>
            <div className={styles.containerUser}>
                <div>
                    <img src="login.jpg" alt="" /> <br />
                    <strong>Ao continuar, você concorda com os termos de serviço do Mindset e confirma que leu a nossa Política de Privacidade.</strong>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Bem-vindo(a) ao Mindset</h1>
                    <div>
                        <input {...register("fullName")} placeholder="Nome completo" type="text" />
                    </div>

                    <div>
                        <input {...register("email")} placeholder="E-mail" type="text" />
                    </div>

                    <div className={styles.mainContent}>
                        <input type="submit" value="Register" />
                        <button onClick={handleRegistration} className={styles.createUser}>
                            <img src="google-icon.svg" alt="" />
                            Crie sua conta com o Google
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}