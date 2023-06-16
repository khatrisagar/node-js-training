const express = require("express");
const app = express();
const PORT = 6666;

const db = require("./models");
const faculty = require("./models/faculty");

app.use(express.json());

app.get("/", async (req, res) => {
  const data = await db.subject.findAll({
    include: db.faculty,
  });
  res.json(data);
});
app.post("/", async (req, res) => {
  try {
    const data = await db.faculty.create(
      {
        facultyName: "Aaaa",
        subjects: [
          {
            subjectName: "dsadasdsd",
          },
        ],
      },
      {
        include: [{ model: db.subject }],
      }
    );
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

// lazy loading

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
