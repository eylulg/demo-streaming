export default function Filter(data, type, ascending) {
  if (type === "year") {
    data.sort(
      (obj1, obj2) => parseInt(obj1.release_date) - parseInt(obj2.release_date)
    );
    if (ascending === true) {
      return data;
    } else {
      return data.reverse();
    }
  } else {
    data.sort((obj1, obj2) => obj1.title.localeCompare(obj2.title));
    if (ascending === true) {
      return data;
    } else {
      return data.reverse();
    }
  }
}
