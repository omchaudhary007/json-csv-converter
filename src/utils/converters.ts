// CSV -> JSON
export function csvToJson(csv: string) {
  try {
    if (!csv || typeof csv !== "string") {
      throw new Error("Invalid CSV input");
    }

    const lines = csv.trim().split("\n");
    if (!lines.length) return [];

    const headers = lines[0].split(",").map((h) => h.trim());
    if (!headers.length) throw new Error("Missing CSV headers");

    return lines.slice(1).map((line, rowIndex) => {
      const values = line.split(",");
      const row: Record<string, string> = {};

      headers.forEach((h, i) => {
        if (values[i] === undefined) {
          throw new Error(`Missing value at row ${rowIndex + 1}`);
        }
        row[h] = values[i].trim();
      });

      return row;
    });
  } catch (err) {
    console.error("csvToJson error:", err);
    return [];
  }
}

// JSON -> CSV
export function jsonToCsv(data: Record<string, any>[]) {
  try {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON input");
    }
    if (!data.length) return "";

    const headers = Object.keys(data[0]);
    if (!headers.length) throw new Error("Missing JSON headers");

    const rows = data.map((row, index) =>
      headers
        .map((h) => {
          if (!(h in row)) {
            throw new Error(`Missing key '${h}' at row ${index + 1}`);
          }
          return String(row[h]);
        })
        .join(","),
    );

    return [headers.join(","), ...rows].join("\n");
  } catch (err) {
    console.error("jsonToCsv error:", err);
    return "";
  }
}

// safe number
export function toNumber(value: string, fallback = 0) {
  try {
    const num = Number(value);
    if (isNaN(num)) throw new Error("Not a number");
    return num;
  } catch {
    return fallback;
  }
}

// capitalize text
export function capitalize(text: string) {
  try {
    if (typeof text !== "string") throw new Error("Invalid text");
    return text ? text[0].toUpperCase() + text.slice(1) : "";
  } catch {
    return "";
  }
}
