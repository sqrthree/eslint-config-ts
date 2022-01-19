interface TsConfig {
  name: string
  version: string
}

const ts: TsConfig = {
  name: 'ts-config',
  version: 'v1.0.0',
}

const log = (value: any): void => {
  console.log(value)
}

console.log(ts)

log('a')
log(1)
