import Image from 'next/image'
import initTranslations from '../i18n';
import TranslationsProvider from "@/components/TranslationsProvider";
import ExampleClientComponent from "@/components/ExampleClientComponent";

const i18nNamespaces = ['Home'];
// @ts-ignore
export default async function Home({ params: { locale }}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
      <TranslationsProvider  namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <h1>Server Component</h1>
            <h1>{t('header')}</h1>
              <ExampleClientComponent />
          </main>
      </TranslationsProvider>
  )
}
