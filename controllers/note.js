import { db } from "../db.js"


export const getNotes = (req,res) => {
    const q = "SELECT *FROM notes"

    db.query(q,(err,data) => {
        console.log(err)
        if(err) return res.json(err)

        return res.status(200).json(data)
    } )
}

export const addNote = (req,res) => {
    const q = 'INSERT INTO notes (`title`,`note`) VALUES(?)'

    const values = [
        req.body.title,
        req.body.content,
    ]

    db.query(q, [values], (err, data) => {
        console.log(err)
        if (err) return res.status(500).json(err)

        return res.status(200).json("note has been created")
    })
}

export const deleteNote = (req, res) => {
    const q = "DELETE FROM notes WHERE id = ?"

    const postId = req.params.id
    console.log(postId)
    db.query(q, [postId], (err, data) => {
        console.log(err)
        if (err) return res.status().json(err)

        console.log("delted")
        return res.status(200).json("note has been deleted")
    })
}