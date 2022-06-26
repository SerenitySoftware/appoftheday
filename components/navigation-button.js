import Link from "next/link";
import NavigationButton from "./navigation-button";
import { formatDateSlug } from "../lib/dates";

export default function AppNavigator({previousApp, nextApp}) {
  return (
      <div className='flex flex-row bg-white border-t-2'>
        {previousApp &&
          <Link href={'/app/' + previousApp.date}>
            <a className="block py-3 px-5">
              <h4 className="block">❮ {previousApp.title}</h4>
              <span className="block">{formatDateSlug(previousApp.date)}</span>
            </a>
          </Link>
        }
        {nextApp &&
          <Link href={'/app/' + nextApp.date}>
            <a className="block py-3 px-5">
              {nextApp.title} ❯
            </a>
          </Link>
        }
      </div>
  )
}
