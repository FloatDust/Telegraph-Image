export function onRequest(context) {
  const host = context.request.headers.get("host");

  if (host && host.endsWith(".pages.dev")) {
    return new Response("Forbidden", { status: 403 });
  }

  return context.next();
}
