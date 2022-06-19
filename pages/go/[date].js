import { loader, tracker } from '../../lib/data';
import { getUserAgent, getIPAddress, getReferrer } from '../../lib/requests';

export async function getServerSideProps(context) {
  const date = context.query.date;
  const userAgent = getUserAgent(context.req);
  const ipAddress = getIPAddress(context.req);
  const referrer = getReferrer(context.req);
  const app = await loader(date);
  await tracker(date, app.slug, userAgent, ipAddress, referrer);

  return {
    redirect: {
      permanent: false,
      destination: app.link,
    }
  }
}

export default function Go() { };
