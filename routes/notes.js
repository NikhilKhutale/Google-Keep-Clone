import express from "express"
import { addNote, deleteNote, getNotes } from "../controllers/note.js"


const router = express.Router()

router.get("/", getNotes)

router.post("/", addNote)


router.delete("/:id",deleteNote)

export default router;