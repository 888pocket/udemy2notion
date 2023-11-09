const { Client } = require("@notionhq/client");

const useNotionMutation = async (data, isLecture, chapterName, index) => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const multiSelect = [];
  if (data.asset && data.asset.asset_type == "Article") {
    multiSelect.push({
      name: "자료",
    });
  }
  if (data.supplementary_assets && data.supplementary_assets.length > 0) {
    multiSelect.push({
      name: "첨부파일",
    });
  }

  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_COURSE_ID,
    },
    properties: {
      이름: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: (isLecture ? `${data.object_index}. ` : "") + data.title,
            },
          },
        ],
      },
      ...(((data.asset && data.asset.asset_type == "Article") ||
        (data.supplementary_assets &&
          data.supplementary_assets.length > 0)) && {
        유형: {
          type: "multi_select",
          multi_select: multiSelect,
        },
      }),
      챕터: {
        select: {
          name: chapterName,
        },
      },
      Study: {
        relation: [
          {
            id: NOTION_DATABASE_LECTURE_ID,
          },
        ],
      },
      번호: {
        number: index,
      },
    },
  });
  console.log(response);
};

module.exports = insertNotion;
