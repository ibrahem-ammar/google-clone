import { GlobeIcon } from "@heroicons/react/solid";

export default function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-600 capitalize mt-5">
            <section className="p-5">
                <p>united kingdom</p>
            </section>
            <section className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
                <div className="flex justify-center items-center whitespace-nowrap md:col-span-2 lg:col-span-1 lg:col-start-2">
                    <GlobeIcon className="h-5 mr-1 text-green-700"/>
                    <p>carbon neutral since 2007</p>
                </div>
                <div className="flex justify-center items-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p>advertising</p>
                    <p>business</p>
                    <p>how search works</p>
                </div>
                <div className="flex justify-center items-center space-x-8 md:ml-auto">
                    <p>privacy</p>
                    <p>terms</p>
                    <p>settings</p>
                </div>
            </section>
        </footer>
    )
}
