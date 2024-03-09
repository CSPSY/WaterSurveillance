import shenzhen from "./mapSZ.json";

const mapDict = {
    //注释掉的这些是要做下钻的功能 有空会完善
    // 秀洲区: "xiuzhou",
    // 南湖区: "nanhu",
    // 嘉善县: "jiashan",
    // 平湖市: "pinghu",
    // 桐乡市: "tongxiang",
    // 海宁市: "haining",
    // ...
};

const mapData = {
    //注释掉的这些是要做下钻的功能
    // xiuzhou,
    // nanhu,
    // jiashan,
    // pinghu,
    // tongxiang,
    // haining,
    // ...
};

export function getMap(mapName) {
    //注释掉的这些是要做下钻的功能
    //   const cityName = mapDict[mapName];
    //   if (cityName) {
    //     return [cityName, mapData[cityName]];
    //   }
    return ["shenzhen", shenzhen];
}

