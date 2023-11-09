require("dotenv").config();
const useLectureListQuery = require("./query/lecture");
const useNotionMutation = require("./query/notion");

async function main() {
  const courses = await useLectureListQuery();
  let chapterName;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i]._class == "chapter") {
      chapterName = `${courses[i]._class}${courses[i].object_index}. ${courses[i].title}`;
      continue;
    }

    executeInOrder(i, courses[i], chapterName);
  }
}

function executeInOrder(i, course, chapterName) {
  setTimeout(
    () =>
      useNotionMutation(
        course,
        !(course._class == "quiz" || course._class == "practice"),
        chapterName,
        i
      ),
    5000 * i
  );
}

main();
