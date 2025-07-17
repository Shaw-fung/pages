addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === '/') {
    return new Response('<h1>首页</h1><p>欢迎来到我的网站！</p>', {
      headers: { 'Content-Type': 'text/html' },
    });
  } else if (url.pathname === '/admin') {
    return new Response('<h1>后台管理</h1><p>请登录以访问管理界面。</p>', {
      headers: { 'Content-Type': 'text/html' },
    });
  } else {
    return new Response('404 Not Found', { status: 404 });
  }
}