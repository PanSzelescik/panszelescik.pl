export default {
  async fetch(request: Request): Promise<Response> {
    return Response.json(Object.fromEntries(request.headers.entries()));
  },
} satisfies ExportedHandler;
