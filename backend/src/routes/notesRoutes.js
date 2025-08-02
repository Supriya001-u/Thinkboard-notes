import express from "express"
import {createNote, deleteNote, getAllNotes, updateNote , getNoteById} from "../controllers/notesController.js";

const router = express.Router();

// An endpoint - combination of a URL + HTTP method that lets the client interact with a specific resource. -> app.get("/api/notes"

router.get("/", getAllNotes );
router.get("/:id", getNoteById );
router.post("/",createNote);
router.put("/:id",updateNote );
router.delete("/:id",deleteNote);
// http://localhost:5002/api/notes/21232333 --> send request to delete 21232333 id node

export default router;

