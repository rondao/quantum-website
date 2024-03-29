import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Facebook, Phone, WhatsApp } from "@material-ui/icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quantum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="navBar" className="fixed w-full py-4 bg-white">
        <div className="container flex items-center justify-between mx-auto">
          <a href="#" className="flex px-2">
            <img className="h-10" src="/quantum_text.png" alt="Quantum" />
          </a>
          <ul className="flex">
            <li className="hidden px-2 mx-4 sm:block">
              <a href="#">Aulas Particulares</a>
            </li>
            <li className="hidden px-2 mx-4 sm:block">
              <a href="#subjects">Cursos</a>
            </li>
            <li className="hidden px-2 mx-4 sm:block">
              <a href="#professors">Professores</a>
            </li>
            <li className="px-2 mx-4">
              <a href="#" className="p-2 border border-black rounded-lg">
                Entrar
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section id="companyPresentation" className="px-8 py-12 bg-white pt-36">
        <div className="container grid mx-auto">
          <div className="mx-auto">
            <img src="/quantum_logo.png" alt="Quantum Logo" />
          </div>
          <div className="pt-6 text-sm text-center sm:text-xl">
            A Quantum visa elevar o desepenho acadêmico de estudantes de todas
            as faixas etárias e classes sociais. <br /> <br />
            Democratizar a educação de excelência, mediante métodos inovadores
            de ensino, proporcionando uma experiência única para cada estudante.
          </div>
        </div>
      </section>

      <section id="subjects" className="bg-fixed bg-bookcase">
        <div className="px-8 py-12 bg-gradient-border">
          <div className="pb-6 text-center">
            Confira as disciplinas e conteúdos cobertos por nossos professores.
          </div>
          <div className="container flex p-2 mx-auto bg-gray-400 rounded-lg w-max sm:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-8 px-1"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
            <input
              type="text"
              placeholder="Procurar por disciplina/conteúdo"
              className="w-full placeholder-white bg-transparent border-b-2"
            />
          </div>
          <div className="container grid grid-cols-2 gap-8 p-8 mx-auto sm:grid-cols-fill">
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 1
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 2
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 3
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 4
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 5
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 6
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 7
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 8
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 9
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 10
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 11
            </div>
            <div className="py-6 text-center bg-gray-400 rounded-lg">
              Disciplina 12
            </div>
          </div>
        </div>
      </section>

      <section id="professors" className="py-12">
        <div className="pb-6 text-center">
          Confira a qualificação de nossos professores.
        </div>
        <div className="container flex p-2 mx-auto bg-gray-400 rounded-lg w-max sm:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-8 px-1"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
          <input
            type="text"
            placeholder="Procurar por professor"
            className="w-full placeholder-white bg-transparent border-b-2"
          />
        </div>
        <div className="container grid gap-8 p-8 mx-auto grid-cols-fill">
          <div className="py-10 text-center bg-gray-400 rounded-lg">
            Professor 1
          </div>
          <div className="py-10 text-center bg-gray-400 rounded-lg">
            Professor 2
          </div>
          <div className="py-10 text-center bg-gray-400 rounded-lg">
            Professor 3
          </div>
          <div className="py-10 text-center bg-gray-400 rounded-lg">
            Professor 4
          </div>
          <div className="py-10 text-center bg-gray-400 rounded-lg">
            Professor 5
          </div>
          <div className="py-10 text-center bg-gray-400 rounded-lg">
            Professor 6
          </div>
        </div>
      </section>

      <footer id="footer" className="w-full py-4 border-t-2">
        <div className="container flex mx-auto">
          <div className="flex-row px-6">
            <div>
              <Phone /> (11) 4103-6491
            </div>
            <div>
              <WhatsApp className="text-green-500" /> (11) 96639-4946
            </div>
          </div>
          <a href="http://www.facebook.com/QuantumAcademicas">
            <Facebook
              className="text-4xl text-blue-500"
              style={{ fontSize: 48 }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
