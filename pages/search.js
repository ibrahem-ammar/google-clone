import Head from "next/head";
import Header from "../components/search/Header";
import Results from "../components/search/Results";

export default function Search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <meta name="description" content="Search Results" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            {/* Search Results */}
            <Results />
        </div>
    )
}
