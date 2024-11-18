import Express from "express";
import indexRoute from "./routes/index";

// Initiate express
const app = Express();

// Middleware pour analyser les requêtes JSON
app.use(Express.json());

// Enregistrez vos routes
app.use("/", indexRoute);

// Catch-all endpoint
app.get("*", (req: any, res: any) => res.send("Hello World!xcsds"));

// Start the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
