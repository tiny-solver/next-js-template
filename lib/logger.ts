import log from "loglevel";

// 환경에 따라 로그 레벨 설정
if (process.env.NODE_ENV === "production") {
  log.setLevel("error"); // 프로덕션에서는 에러만 출력
} else {
  log.setLevel("debug"); // 개발 환경에서는 디버그까지 출력
}

// export log named as logger
export const logger = log;
