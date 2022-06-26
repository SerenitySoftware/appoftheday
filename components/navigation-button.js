import Link from "next/link";
import { formatDateSlug } from "../lib/dates";

export default function NavigationButton({date, text, icon, iconPosition, classes}) {
  return (
    <Link href={`/app/${date}`}>
      <a className={`flex flex-row items-center py-3 px-5 tracking-tight ${classes}`}>
        {iconPosition === 'left' && <div className='pr-3 text-5xl text-gray-300'>{icon}</div>}
        <div className='flex flex-col'>
          <h4 className="block text-xl text-gray-700 font-extrabold">{text}</h4>
          <p className="text-sm text-gray-500 italic">{formatDateSlug(date)}</p>
        </div>
        {iconPosition === 'right' && <div className='pl-5 text-5xl text-gray-300'>{icon}</div>}
      </a>
    </Link>
  )
}
