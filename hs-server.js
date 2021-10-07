import DHT from '@hyperswarm/dht'
const node = new DHT()

const server = node.createServer()

server.on('connection', function (noiseSocket) {
  console.log('Remote public key', noiseSocket.remotePublicKey)
  console.log('Local public key', noiseSocket.publicKey) // same as keyPair.publicKey

  noiseSocket.on('data', chunk => {
    noiseSocket.write(chunk)
    noiseSocket.end()
  })
})


const keyPair = DHT.keyPair()
await server.listen(keyPair)
console.log(keyPair.publicKey.toString('hex'))