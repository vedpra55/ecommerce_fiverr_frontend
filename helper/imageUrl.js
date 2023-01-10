export function imageUrl(str) {
  if (Array.from(str)[0] === "h") {
    return str;
  } else {
    let t = str;
    return "https:" + t;
  }
}
