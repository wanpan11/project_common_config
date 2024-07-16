import path from "path";
import boxen from "boxen";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { name } from "../package.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tpList = ["react-ts-vite", "react-ts-webpack"];

const prompt = [
  {
    type: "input",
    message: "请输入项目名称(project name)：",
    name: "projectName",
    default: "react-app",
  },
  {
    type: "list",
    message: "选择模板(choose template)：",
    name: "type",
    default: tpList[0],
    choices: tpList,
  },
  {
    type: "list",
    message: "安装依赖(download dependencies)：",
    name: "install",
    default: "N",
    choices: ["Y", "N"],
  },
];

const downloadConf = {
  tempDir: path.resolve(__dirname, "../temp"),
  templateDir: path.join(__dirname, "../template"),
};

const logFile = path.resolve(__dirname, "../versionLog.json");

const repo = {
  [tpList[0]]: {
    url: "https://codeload.github.com/wanpan11/react-admin-tp/zip/refs/heads/vite",
    dirName: "react-admin-tp-vite",
  },
  [tpList[1]]: {
    url: "https://codeload.github.com/wanpan11/react-admin-tp/zip/refs/heads/webpack",
    dirName: "react-admin-tp-webpack",
  },
};

const printUpdateMsg = (version: string, lastVer: string) => {
  console.log(
    boxen(
      `package update from ${version} to ${lastVer}

    run ${chalk.blue(`npm i ${name} -g`)}

   Please upgrade before using

        请升级后在使用`,
      {
        padding: 1,
        borderColor: "blue",
        borderStyle: "double",
      }
    )
  );
};

export { prompt, logFile, tpList, repo, printUpdateMsg, downloadConf };
