import fs from "fs";
import csv from "csv-parser";

const first = (x) => (x && x.length > 1 ? x[1] : null);

const results: { [key: string]: string }[] = [];
fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    fs.writeFileSync(
      "app/data/data.json",
      JSON.stringify(
        results.map((x) => ({
          qno: Number(Object.values(x)[0]),
          text: x["Question"],
          media: first(x["Question Media"].match(/\((.+)\)/)),
          mediaType: x["Question Media Type"],
          answer: {
            text: x["Answer"],
            media: first(x["Answer Media"].match(/\((.+)\)/)),
            mediaType: x["Answer Media Type"],
          },
        }))
      )
    );
  });
