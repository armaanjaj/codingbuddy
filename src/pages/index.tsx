import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "@/components/Navbar";
import TopicCard from "@/components/Topic-Card";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>CodingBuddy</title>
                <meta
                    name="description"
                    content="Coding blogs on multiple programming languages"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                {/* <div className={styles.description}></div>

                <div className={styles.center}></div> */}

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <TopicCard />
                    </div>
                    <div className={styles.card}>
                        <TopicCard />
                    </div>
                    <div className={styles.card}>
                        <TopicCard />
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
