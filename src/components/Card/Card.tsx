import React from 'react';
import Link from 'next/link';
import styles from '../../styles/pages/Home.module.scss';

const Card = () => {
    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Sejam bem vindos!
                </h1>

                <p className={styles.description}>
                    Mindset Technology construindo um mundo melhor.
                </p>

                <div className={styles.grid}>
                    <Link href="/website">
                        <a className={styles.card}>
                            <h3>Desenvolvimento de Websites &rarr;</h3>
                            <p>Aplicações modernas para o seu negócio.</p>
                        </a>
                    </Link>

                    <Link href="/backupNuvem">
                        <a className={styles.card}
                        >
                            <h3>Soluções de Backup em Nuvem &rarr;</h3>
                            <p>Rotinas configuráveis para manter os dados da sua empresa seguros.</p>
                        </a>
                    </Link>

                    <Link href="/infra">
                        <a className={styles.card}>
                            <h3>Configuração e gestão de rede de computadores &rarr;</h3>
                            <p>Infraestrutura com gestão de segurança, para evitar ataques Hackers. </p>
                        </a>
                    </Link>

                    <Link href="/support">
                        <a className={styles.card}>
                            <h3>Suporte ao cliente &rarr;</h3>
                            <p>
                                Prestamos suportes rápidos remotos e locais, entre em contato conosco.
                            De Segunda à Sexta das 08:00 às 20:00 horas.                   </p>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Card
