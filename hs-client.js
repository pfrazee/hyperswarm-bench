import DHT from '@hyperswarm/dht'
const node = new DHT()

const publicKey = Buffer.from(process.env.PUBKEY, 'hex')

function roundtrip (publicKey) {
  return new Promise((resolve) => {
    const noiseSocket = node.connect(publicKey)
    noiseSocket.on('open', function () {
      noiseSocket.write(Buffer.from([1,2,3,4,5]))
      noiseSocket.on('data', chunk => {
        console.log(chunk)
        noiseSocket.end()
        resolve()
      })
    })
  })
}

const start = Date.now()
for (let i = 0; i < 10; i++) {
  console.log('RT', i)
  await roundtrip(publicKey)
}
console.log('Total MS:', Date.now() - start)
process.exit(0)