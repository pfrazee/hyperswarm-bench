# Hyperswarm connection establishment bench

This repo includes two benchmarks, which you use as follows:

1. On server, run `node hs-server.js`. It will emit a pubkey.
2. On client, run `PUBKEY=$PUBKEY node hs-client.js`. The Hyperswarm bench will run.
3. On server, close hs-server.js.
4. On server, run `node tcp-server.js`.
5. On client, run `HOST=$HOST PORT=12345 node tcp-client.js`. The TCP bench will run.
```

Both benchmarks will go through 10 iterations.
Each iteration will open a connection, send a packet from client to server, echo the packet back from server to client, then close the connection.
These "open and echo" passes occur serially.

Connecting between my Texas laptop and a Google Cloud us-central1-a server, I had the following results:

```
~/tmp/hyperswarm-conn-bench PUBKEY=... node hs-client.js
RT 0
<Buffer 01 02 03 04 05>
RT 1
<Buffer 01 02 03 04 05>
RT 2
<Buffer 01 02 03 04 05>
RT 3
<Buffer 01 02 03 04 05>
RT 4
<Buffer 01 02 03 04 05>
RT 5
<Buffer 01 02 03 04 05>
RT 6
<Buffer 01 02 03 04 05>
RT 7
<Buffer 01 02 03 04 05>
RT 8
<Buffer 01 02 03 04 05>
RT 9
<Buffer 01 02 03 04 05>
Total MS: 7036
~/tmp/hyperswarm-conn-bench HOST=... PORT=12345 node tcp-client.js
RT 0
<Buffer 01 02 03 04 05>
RT 1
<Buffer 01 02 03 04 05>
RT 2
<Buffer 01 02 03 04 05>
RT 3
<Buffer 01 02 03 04 05>
RT 4
<Buffer 01 02 03 04 05>
RT 5
<Buffer 01 02 03 04 05>
RT 6
<Buffer 01 02 03 04 05>
RT 7
<Buffer 01 02 03 04 05>
RT 8
<Buffer 01 02 03 04 05>
RT 9
<Buffer 01 02 03 04 05>
Total MS: 922
```