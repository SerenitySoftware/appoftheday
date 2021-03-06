import Link from "next/link";

export default function AppProfile({app}) {
  return (
      <div className="bg-white border-t-2 border-slate-300 relative">
        <div className="border-2 border-slate-300 absolute -top-10 left-10">
          <img src={app.images.icon} alt={'Icon for ' + app.title}/>
        </div>
        <div className="pt-14 px-5 sm:px-10 flex flex-row items-baseline gap-2">
          <h1 className="text-gray-700 text-5xl italic font-extrabold tracking-tight">{app.title}</h1>
          {app.creator &&
              <h2 className="text-gray-400 text-xl">by {app.creator}</h2>
          }
        </div>
        <div className="columns-1 md:columns-2 gap-5 py-5 px-5 sm:px-10">
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
              <Link href={'/go/' + app.date}>
                <a target="_blank" className="inline-block rounded-md bg-sky-700 text-white border hover:border-sky-700 hover:text-sky-700 hover:bg-white py-3 px-5 tracking-tight transition-colors">
                  Go to app ???
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img
                src={app.images.main}
                alt={'Screenshot of ' + app.title}/>
          </div>
        </div>
      </div>
  )
}
