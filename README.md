# udemy2notion

Transfer Udemy course catalog to Notion database using javascript.

## 📋 Description

This repository contains a javascript to transfer Udemy course catalog to a Notion database. The script automates the process of migrating course information from Udemy to Notion.

## 🔍 Usage

Follow these steps to use the script:

1. Create or Copy the Notion database.
   - Course DB : https://muddy-cloth-f89.notion.site/Course-DB-0f3dfb5a2c3b4c619a07455bbfd9b334?pvs=4
   - Lecture DB : https://muddy-cloth-f89.notion.site/Lecture-DB-c87155790f2a43a7b432537c0c9abe97?pvs=4
2. Download the source code and create a `.env` file.
   In the `.env` file, set the environment variable.
3. Run `npm install` to install the necessary dependencies.
4. Execute the script using `npm run start`.

Make sure to customize the environment variables and configurations based on your Notion setup before running the script.

## ⛳️ Environment variable

- NOTION_TOKEN : The notion api token issued by https://developers.notion.com/
- NOTION_DATABASE_COURSE_ID : The notion database containing course information(ex. https://muddy-cloth-f89.notion.site/Course-DB-0f3dfb5a2c3b4c619a07455bbfd9b334?pvs=4)
- NOTION_DATABASE_LECTURE_ID : The notion database containing lecture information(ex. https://muddy-cloth-f89.notion.site/Lecture-DB-c87155790f2a43a7b432537c0c9abe97?pvs=4)
- ACCESS_TOKEN : The Udemy ACCESS TOKEN issued by https://www.udemy.com/ (can be obtained from cookies)
- LECTURE_CODE : 7-digit code obtainable from the course links displayed on https://www.udemy.com/home/my-courses/learning/

## 📋 설명

이 리포지토리는 Udemy 강의 목록을 노션의 데이터베이스로 옮겨오는 javascript를 포함하고 있습니다. 이 스크립트는 강의 정보를 유데미에서 노션으로 자동 이전시켜줍니다.

## 🔍 사용법

스크립트를 사용하기 위해 아래 세 단계를 따라주세요:

1. 노션 데이터베이스를 만들거나 복사한다.
   - Course DB : https://muddy-cloth-f89.notion.site/Course-DB-0f3dfb5a2c3b4c619a07455bbfd9b334?pvs=4
   - Lecture DB : https://muddy-cloth-f89.notion.site/Lecture-DB-c87155790f2a43a7b432537c0c9abe97?pvs=4
2. 소스코드를 다운로드 받은 후 `.env` 파일을 생성한다. `.env` 파일 안에 환경 변수를 설정해준다.
3. 필요한 dependencies를 설치하기 위해 `npm install` 명령어를 실행해준다.
4. `npm run start` 명령어로 실행한다.

스크립트를 실행하기 전 환경 변수와 노션이 잘 세팅되어 있는지 확인해주세요.

## ⛳️ 환경 변수

- NOTION_TOKEN : https://developers.notion.com/ 에서 발급받는 노션 api 토큰
- NOTION_DATABASE_COURSE_ID : 강좌 정보를 담는 노션 데이터베이스 ID(ex. https://muddy-cloth-f89.notion.site/Course-DB-0f3dfb5a2c3b4c619a07455bbfd9b334?pvs=4)
- NOTION_DATABASE_LECTURE_ID : 노션 강의 정보를 담는 노션 데이터베이스 ID(ex. https://muddy-cloth-f89.notion.site/Lecture-DB-c87155790f2a43a7b432537c0c9abe97?pvs=4)
- ACCESS_TOKEN : 유데미 ACCESS TOKEN https://www.udemy.com/ (쿠키에서 얻을 수 있다.)
- LECTURE_CODE : https://www.udemy.com/home/my-courses/learning/ 에 표시되는 강의 링크에서 얻을 수 있는 7자리 숫자
