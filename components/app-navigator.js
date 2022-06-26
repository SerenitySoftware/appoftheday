import { nextDropTime } from "../lib/dates";
import NavigationButton from "./navigation-button";

export default function AppNavigator({previousApp, nextApp}) {
  return (
      <div className='flex flex-row bg-white border-t-2'>
        {previousApp && <NavigationButton date={previousApp.date} text={previousApp.title} icon='❮' iconPosition='left' />}
        {nextApp && <NavigationButton date={nextApp.date} text={nextApp.title} icon='❯' iconPosition='right' classes='ml-auto mr-0' />}
        {!nextApp &&
          <div className='flex flex-row items-center py-3 px-5 tracking-tight ml-auto mr-0'>
            <div className='flex-col'>
              <h4 className='block text-xl text-gray-700 font-extrabold'>Next Drop</h4>
              <p className='text-sm text-gray-500 italic'>{nextDropTime()}</p>
            </div>
            <div className='pl-5 text-5xl text-gray-300'>❯</div>
          </div>
        }
      </div>
  )
}
