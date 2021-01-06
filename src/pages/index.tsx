import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quantum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="navBar" className="py-6 border-b-2">
        <div className="container flex justify-between mx-auto">
          <a href="#">Quantum</a>
          <ul className="flex">
            <li className="px-2 mx-4">
              <a href="#">Aulas Particulares</a>
            </li>
            <li className="px-2 mx-4">
              <a href="#">Cursos</a>
            </li>
            <li className="px-2 mx-4">
              <a href="#">Professores</a>
            </li>
            <li className="px-2 mx-4">
              <a href="#">Entrar</a>
            </li>
          </ul>
        </div>
      </header>

      <section id="companyPresentation" className="py-12 border-b-2">
        <div className="container grid mx-auto">
          <div className="p-48 mx-auto bg-gray-400">LOGO</div>
          <div className="pt-6 text-center">
            A Quantum visa elevar o desepenho acadêmico de estudantes de todas
            as faixas etárias e classes sociais. <br />
            Democratizar a educação de excelência, mediante métodos inovadores
            de ensino, proporcionando uma experiência única para cada estudante.
          </div>
        </div>
      </section>
    </div>
  );
}
