addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello deno deploy!", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    })
  );
});
