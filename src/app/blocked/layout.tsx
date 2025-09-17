// This layout will be used only for the blocked page
// It doesn't include the header

import { LanguageProvider } from "@/app/contexts/LanguageContext";
import Image from "next/image";

export default function BlockedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LanguageProvider>
            <header className={`w-full mb-0 top-0 z-[1000] transition-shadow duration-300 bg-white`}>
                <div className="border-b border-black">
                    <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`flex items-center justify-between h-20 p-2`}>
                            <div className="flex-shrink-0 flex items-center">
                                <Image
                                    src="/Logo.png"
                                    alt="CAGS Logo"
                                    width={200}
                                    height={50}
                                    className="h-10 mr-4 ml-2 p-1" // Replaces the old className
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>{children}</main>
        </LanguageProvider>
    );
}
