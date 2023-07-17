import dayjs from "dayjs";

export function joinedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatDate = `Joined ${date.format("DD MM YYYY")}`;

  return formatDate;
}
