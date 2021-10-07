import net from 'net'

const server = net.createServer((c) => {
  console.log('connection')
  c.on('data', chunk => {
    c.write(chunk)
    c.end()
  })
});
server.listen(12345, () => {
  console.log('listening on', 12345);
});