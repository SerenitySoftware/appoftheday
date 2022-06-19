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

export {
  getUserAgent,
    getIPAddress,
    getReferrer,
}
