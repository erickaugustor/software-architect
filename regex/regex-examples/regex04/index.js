const heroes = `Nickname: Chapolin, Power: Velocidade
Nick: Batman, Power: Money
`

const regex = /^(Nickname|Nick):\s(?<nickname>\w+),\sPower:\s(?<power>\w.*)$/

const finalString = heroes.replace(exp, (substring, _, nickname, power, ...args) => {
  return `${nickname} ${power}`
})

console.log({ finalString })

heroes.replace(exp, '$<nickname> $<power>')