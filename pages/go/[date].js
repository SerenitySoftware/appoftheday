import { loader, tracker } from '../../lib/data';

function getUserAgent(req) {
  return req.headers['user-agent'];
}

function getIPAddress(req) {
  if (req.headers["x-forwarded-for"]) {
    return req.headers["x-forwarded-for"].split(',')[0];
  }

  if (req.headers["x-real-ip"]) {
    return req.headers["x-real-ip"];
  }

  return req.socket.remoteAddress;
}

function getReferrer(req) {
  return req.headers['referer'];
}

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
