const axios = require("axios");

const useLectureListQuery = async () => {
  let result = [];
  try {
    let next = "";
    while (true) {
      const fetchDataFunction = fetchCourseList(next);
      const data = await fetchDataFunction();
      result = [...result, ...data.results];

      if (!data.next) break;
      next = data.next;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return result;
};

const fetchCourseList = (nextLink) => {
  const lectureCode = process.env.LECTURE_CODE;
  const accessToken = process.env.ACCESS_TOKEN;
  const url =
    nextLink ||
    `https://www.udemy.com/api-2.0/courses/${lectureCode}/subscriber-curriculum-items/?page_size=200&fields[lecture]=title,object_index,is_published,sort_order,created,asset,supplementary_assets,is_free&fields[quiz]=title,object_index,is_published,sort_order,type&fields[practice]=title,object_index,is_published,sort_order&fields[chapter]=title,object_index,is_published,sort_order&fields[asset]=title,filename,asset_type,status,time_estimation,is_external&caching_intent=True`;

  return async () => {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data;
  };
};

module.exports = useLectureListQuery;
