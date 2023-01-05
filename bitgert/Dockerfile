FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    rm -rf /var/lib/apt/lists/*
RUN add-apt-repository -y ppa:ethereum/ethereum \
    && apt-get update \
    && apt-get install -y ethereum
RUN ["mkdir", "-p", "/root/bitgert-node/"]
COPY brise_mainnet.json /root/bitgert-node/
ARG PASSWORD
ARG PRIVATE_KEY
RUN echo $PASSWORD > ~/bitgert-node/.password
RUN echo $PRIVATE_KEY > ~/bitgert-node/.pk
RUN geth --datadir ~/bitgert-node account import --password ~/bitgert-node/.password ~/bitgert-node/.pk
RUN geth --datadir ~/bitgert-node init ~/bitgert-node/brise_mainnet.json
ARG BOOTNODES
ARG ADDRESS
ENV BOOTNODES ${BOOTNODES}
ENV ADDRESS ${ADDRESS}
EXPOSE 8545
EXPOSE 8546
EXPOSE 30303
ENTRYPOINT geth --datadir ~/bitgert-node \
    --syncmode 'full' \ 
    --http \ 
    --http.addr '0.0.0.0' \ 
    --http.port 8545 \ 
    --http.corsdomain '*' \
    --http.vhosts '*' \
    --http.api 'eth,personal,net,web3,miner,txpool,debug' \
    --bootnodes ${BOOTNODES} \
    --networkid 32520 \
    --ws \
    --ws.addr '0.0.0.0' \
    --ws.port 8546 \
    --ws.origins '*' \
    --port 30303 \
    --maxpeers 80 \
    --mine \
    --miner.threads 4 \
    --unlock ${ADDRESS} \
    --password ~/bitgert-node/.password \
    --allow-insecure-unlock \
    --rpc.txfeecap 0 \
    --gcmode 'archive'