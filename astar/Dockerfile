FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y adduser libfontconfig1 software-properties-common wget curl && \
    rm -rf /var/lib/apt/lists/*
RUN wget $(curl -s https://api.github.com/repos/AstarNetwork/Astar/releases/latest | grep "tag_name" | awk '{print "https://github.com/AstarNetwork/Astar/releases/download/" substr($2, 2, length($2)-3) "/astar-collator-v" substr($2, 3, length($2)-4) "-ubuntu-x86_64.tar.gz"}') && \
    tar -xvf astar-collator*.tar.gz
RUN mv ./astar-collator /usr/local/bin
RUN mkdir /var/lib/astar
EXPOSE 30333
EXPOSE 9944
EXPOSE 9933
ENTRYPOINT /usr/local/bin/astar-collator \
  --pruning archive \
  --rpc-cors all \
  --name Vefi-Ecosystem \
  --chain astar \
  --base-path /var/lib/astar \
  --execution wasm \
  --unsafe-rpc-external \
  --ws-external \
  --port 30333 \
  --ws-port 9944 \
  --rpc-port 9933