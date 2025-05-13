import "@/styles/index.scss"
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import React from "react";
import {setRequestLocale} from 'next-intl/server';
import {locales} from "@/constants/locale";


export default async function LocaleLayout({children, params}: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <head>
                <meta name="description" content="ILS - Transport & Logistics" />
                <link rel="icon" href="/logo.jpg" sizes="any" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />
            </head>
            <body>
                <>
                    {/* <!-- Yandex.Metrika counter --> */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                ym(101049906, "init", {
                                    clickmap:true,
                                    trackLinks:true,
                                    accurateTrackBounce:true,
                                    webvisor:true
                                });
                            `,
                        }}
                    />
                    <noscript>
                        <div>
                            <img
                                src="https://mc.yandex.ru/watch/101049906"
                                style={{ position: "absolute", left: "-9999px" }}
                                alt=""
                            />
                        </div>
                    </noscript>
                </>
                {/* <!-- /Yandex.Metrika counter --> */}
                <NextIntlClientProvider>{children}</NextIntlClientProvider>    
            </body>
        </html>
    );
}


export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
}
