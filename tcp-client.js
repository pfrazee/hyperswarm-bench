import net from 'net'

const host = process.env.HOST
const port = Number(process.env.PORT)

function roundtrip (port) {
  return new Promise((resolve) => {
    const client = net.createConnection({ host, port }, () => {
      client.write(Buffer.from([1,2,3,4,5]))
      client.on('data', chunk => {
        console.log(chunk)
        client.end()
        resolve()
      })
    });
  })
}

const start = Date.now()
for (let i = 0; i < 10; i++) {
  console.log('RT', i)
  await roundtrip(port)
}
console.log('Total MS:', Date.now() - start)
process.exit(0)