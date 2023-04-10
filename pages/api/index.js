import { createServer } from "miragejs";
import { getPosts, getPostById, createPost, updatePost, deletePost } from "./api";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/posts", () => {
      return getPosts();
    });

    this.get("/posts/:id", (schema, request) => {
      const id = request.params.id;
      return getPostById(id);
    });

    this.post("/posts", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return createPost(data);
    });

    this.put("/posts/:id", (schema, request) => {
      const id = request.params.id;
      const data = JSON.parse(request.requestBody);
      return updatePost(id, data);
    });

    this.delete("/posts/:id", (schema, request) => {
      const id = request.params.id;
      return deletePost(id);
    });
  },
});
