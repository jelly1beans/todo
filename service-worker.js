self.addEventListener("install", function(e){
  e.waitUntil("todo-cache".then(function(cache){
    return cache.addAll(["index.html"]);
  })
);
});
