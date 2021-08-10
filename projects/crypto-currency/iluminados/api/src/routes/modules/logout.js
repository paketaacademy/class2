import express from "express";
const app = express();

app.use(express.json());

app.get("./logout", function (req, res) {
  req.logout();
  req.session.destroy(function (error) {
    res.redirect("./login");
  });
});

export default app;
