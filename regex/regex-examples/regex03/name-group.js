const date = '2021-05-12'
const regex = /^(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})$/

const match = regex.exec(date)

console.log({ match })

const { groups } = match;
const { year, month, day } = groups;

console.log({ day, month, year });
