import Head from 'next/head'

export async function getServerSideProps(context) {
  return {
    props: {
      app: {
        title: 'Clara',
        subtitle: 'Human-in-the-loop assistant that schedules meetings.',
        description: 'Clara helps you focus on things that matter. Just add Clara to any email, and it will take care of scheduling back-and-forth on your behalf.',
        creator: 'ClaraLabs',
        pricing: {
          trial: true,
          currency: '$',
          minimum: 99,
          maximum: 399,
          period: 'month',
          model: 'per user'
        },
        tags: ['Productivity', 'Calendar'],
        images: {
          main: 'https://ph-files.imgix.net/2e458295-b27b-4471-a3f4-b0c27ee6362d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip',
          icon: 'https://ph-files.imgix.net/4acd998d-9139-4a71-b278-d76df8382665.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=64&h=64&fit=crop&frame=1&dpr=1',
        },
        date: '2022-06-18',
        slug: 'clara'
      }
    }
  }
}

export default function Home({ app }) {
  return (
    <div className="container mx-auto max-w-4xl bg-slate-200 h-full shadow-lg shadow-slate-500">
      <Head>
        <title>App of the Day</title>
        <meta name="description" content="One app you'll love each day" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="py-20 text-center text-2xl bg-slate-800">
        <h1 className="text-white text-5xl font-extrabold tracking-tight">App of the Day</h1>
      </div>
      <div className="bg-white border-y-2 border-slate-300 relative">
        <div className="border-2 border-slate-300 absolute -top-10 left-10">
          <img src={app.images.icon} alt={'Icon for ' + app.title}/>
        </div>
        <div className="pt-14 px-10 flex flex-row items-baseline gap-2">
          <h1 className="text-gray-700 text-5xl italic font-extrabold tracking-tight">{app.title}</h1>
          {app.creator &&
            <h2 className="text-gray-400 text-xl">by {app.creator}</h2>
          }
        </div>
        <div className="grid grid-cols-2 gap-5 py-5 px-10">
          <div>
            <div className="border-b">
              <h2 className="text-gray-500 text-2xl mb-3">{app.subtitle}</h2>
              <p className="text-gray-700 mb-3">{app.description}</p>
            </div>
            <div className="mt-3 flex flex-row gap-3">
              <p className="text-gray-700 italic">
                <span className='inline-block p-2'>
                  {app.pricing.currency}{app.pricing.minimum}
                  {app.pricing.minimum !== app.pricing.maximum && '-' + app.pricing.maximum}/{app.pricing.period}
                  &nbsp;{app.pricing.model}
                </span>
                {app.pricing.trial && <span className='inline-block ml-3 px-3 py-1 rounded bg-emerald-600 text-white'>Free Trial</span>}
              </p>
            </div>
            {app.tags &&
              <div className="mt-3 grid gap-2 grid-flow-col auto-cols-max">
                {app.tags.map((tag) =>
                  <span key={tag} className="py-1 px-2 rounded-lg border text-slate-600">{tag}</span>
                )}
              </div>
            }
            <div className="mt-5">
              <a
                  href={'/go/' + app.date + '/' + app.slug + '/'}
                  target="_blank"
                  className="inline-block rounded-md bg-sky-700 text-white border hover:border-sky-700 hover:text-sky-700 hover:bg-white py-3 px-5 tracking-tight transition-colors">
                Go to app ➜
              </a>
            </div>
          </div>
          <div className="group relative rounded-lg">
            <img
                src={app.images.main}
                alt={'Screenshot of ' + app.title}/>
          </div>
        </div>
      </div>
      <div className="px-10 py-5 flex flex-row justify-between">
        <p>
          Lovingly made by <a href="https://www.serenity.software" target="_blank" className="text-sky-700">Serenity
          Software</a>
        </p>
        <a href="mailto:jordan@serenity.software?App of the Day Submission" className="text-sky-700">Submit an app</a>
      </div>
    </div>
  )
}
