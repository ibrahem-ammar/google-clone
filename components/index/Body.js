import { MicrophoneIcon,ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import { useRef } from "react";
import { useRouter } from 'next/dist/client/router';

export default function Body() {
    const searchRef = useRef(null);
    const router = useRouter();
    const search = () => {
        const searchTerm = searchRef.current.value;
        if (!searchTerm) return ;
        router.push(`/search?term=${searchTerm}`);
    }
    return (
        <main className="flex flex-col w-full items-center justify-center flex-grow">
            <section>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" 
                loading="lazy"
                alt="Google"
                height={100}
                width={300}
                />
            </section>

            <form className="w-full flex flex-col items-center justify-center mt-3 px-5">
                <div className="flex items-center justify-center w-full max-w-md sm:max-w-xl lg:max-w-2xl rounded-full border border-gray-300 px-5 py-3 hover:shadow-lg focus-within:shadow-lg">
                    <SearchIcon className="h-5 mr-3 text-gray-500"/>

                    <input type="text" ref={searchRef} className="flex-grow focus:outline-none"/>

                    <MicrophoneIcon className="h-5 ml-3 text-gray-500"/>
                </div>
                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button type="button" onClick={search} className="search-btn">google search</button>
                    <button type="button" onClick={search} className="search-btn">i'm feeling lucky</button>
                </div>
            </form>
        </main>
    )
}
