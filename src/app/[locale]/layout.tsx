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
            <meta name="description" content="Logistex - Transport & Logistics React Next js Template" />
            <link rel="icon" href="/favicon.png" sizes="any" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />
        </head>
        <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
        </html>
    );
}


export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
}
