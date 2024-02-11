import { Book, FileText } from "@phosphor-icons/react";

import Card from "../components/Card";

const Home = function () {
    return (
        <>
            <div className="flex items-center justify-center h-40">
                <img src="/favicon.png" alt="logo" className="w-20 h-20" />
            </div>
            <Card
                page="report"
                label="Gerar relatório"
                CardIcon={FileText}
                labelLink="Abrir"
            />
            <Card
                page="feedback"
                label="Criar feedback"
                CardIcon={Book}
                labelLink="Abrir"
            />
            <a
                href="https://github.com/pdaug/superelatorio"
                className="hover:text-red-600 text-center"
                target="_blank"
            >
                GitHub
            </a>
        </>
    );
};

export default Home;
