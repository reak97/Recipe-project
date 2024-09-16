const express = require("express"); 
const app = express(); 
const path = require("path");
const methodOverride = require("method-override");
const cors = require("cors");
const cookieParser = require("cookie-parser"); 
const session = require("express-session");
const apiRecipeRouter = require("./routes/api/recipes")
const apiUsersRouter = require("./routes/api/users")
const mainRoute = require("./routes/main");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cookieParser());

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});


app.use(mainRoute);
app.use(apiUsersRouter);
app.use(apiRecipeRouter);
