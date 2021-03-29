import express from "express";
import { UserController } from "@/interfaces/controllers/userController";
import { MysqlConnection } from "@/interfaces/db/mysqlConnection";

const app = express();
const router = express.Router();

const db = new MysqlConnection()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get(
  "/user",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const useController = new UserController(db)
    const response = await useController.findUser(req.params as any)
    res.json(response)
  }
);

router.get(
  "/users",
  async (_: express.Request, res: express.Response): Promise<void> => {
    const useController = new UserController(db)
    const response = await useController.userAll();
    res.json(response)
  }
);

router.post(
  "/user/create",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const useController = new UserController(db)
    const response = await useController.createUser(req.params as any);
    res.json(response)
  }
);

router.post(
  "/user/update",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const useController = new UserController(db)
    const response = await useController.updateUser(req.params as any);
    res.json(response)
  }
);

router.post(
  "/user/delete",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const useController = new UserController(db)
    const response = await useController.deleteUser(req.params as any);
    res.json(response)
  }
);

app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

export default app;
