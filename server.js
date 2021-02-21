import { downVuer } from "./app.js";

const port = process.env.PORT || 3000;
const server = downVuer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
