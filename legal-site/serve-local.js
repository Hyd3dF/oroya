const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = 4173;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function resolvePath(urlPath) {
  const sanitized = decodeURIComponent(urlPath.split("?")[0]);
  const relativePath = sanitized === "/" ? "/index.html" : sanitized;
  const fullPath = path.normalize(path.join(root, relativePath));

  if (!fullPath.startsWith(root)) {
    return null;
  }

  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    return path.join(fullPath, "index.html");
  }

  return fullPath;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url || "/");

  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  let finalPath = filePath;

  if (!fs.existsSync(finalPath) && !path.extname(finalPath)) {
    const withIndex = path.join(finalPath, "index.html");
    const withHtml = finalPath + ".html";

    if (fs.existsSync(withIndex)) {
      finalPath = withIndex;
    } else if (fs.existsSync(withHtml)) {
      finalPath = withHtml;
    }
  }

  if (!fs.existsSync(finalPath)) {
    res.writeHead(404);
    res.end("Not Found");
    return;
  }

  const ext = path.extname(finalPath).toLowerCase();
  const contentType = contentTypes[ext] || "application/octet-stream";

  fs.readFile(finalPath, (error, data) => {
    if (error) {
      res.writeHead(500);
      res.end("Internal Server Error");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log("OROYA legal site running at http://localhost:" + port);
});
