import Head from "next/head";
import { getDateSlug } from "../lib/dates";

export default function Layout({ children }) {
  return (
      <>
        <Head>
          <title>App of the Day</title>
          <meta name="description" content="One app you'll love each day" />
          <link rel="icon" href="/favicon.ico" />
          <script src="https://cdn.tailwindcss.com"></script>
        </Head>
        <main>
          {getDateSlug() < "2022-07-01" &&
            <div className="bg-amber-300 border-b-4 border-red-400 py-2">
              <div className="text-center text-xl">
                <p>Hello! App of the Day is officially launching on July 1st, 2022.</p>
              </div>
            </div>
          }
          <div className="container mx-auto max-w-4xl bg-slate-200 h-full shadow-lg shadow-slate-500">
            <div className="pt-10 pb-20 md:pt-20 text-center text-2xl bg-slate-800">
              <h1 className="text-white text-5xl font-extrabold tracking-tight">App of the Day</h1>
            </div>
            {children}
            <div className="px-5 sm:px-10 py-5 flex flex-row justify-between border-t-2 border-slate-300">
              <p>
                Lovingly made by <a href="https://www.serenity.software" target="_blank" className="text-sky-700">Serenity
                Software</a>
              </p>
              <a href="mailto:jordan@serenity.software?App of the Day Submission" className="text-sky-700">Submit an app</a>
            </div>
          </div>
        </main>
      </>
  )
}
