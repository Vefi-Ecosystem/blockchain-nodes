FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    rm -rf /var/lib/apt/lists/*
RUN add-apt-repository -y ppa:ethereum/ethereum \
    && apt-get update \
    && apt-get install -y ethereum
RUN ["mkdir", "-p", "/root/smartchain-node/"]
COPY genesis.json /root/smartchain-node/
ARG PASSWORD
ARG PRIVATE_KEY
RUN echo $PASSWORD > ~/smartchain-node/.password
RUN echo $PRIVATE_KEY > ~/smartchain-node/.pk
RUN geth --datadir ~/smartchain-node account import --password ~/smartchain-node/.password ~/smartchain-node/.pk
RUN geth --datadir ~/smartchain-node init ~/smartchain-node/genesis.json
ARG BOOTNODES
ARG ADDRESS
ENV BOOTNODES ${BOOTNODES}
ENV ADDRESS ${ADDRESS}
EXPOSE 7545
EXPOSE 7546
EXPOSE 30301
ENTRYPOINT geth --datadir ~/smartchain-node \
    --syncmode 'full' \ 
    --http \ 
    --http.addr '0.0.0.0' \ 
    --http.port 7545 \ 
    --http.corsdomain '*' \
    --http.vhosts '*' \
    --http.api 'eth,personal,net,web3,miner,txpool,debug' \
    --bootnodes ${BOOTNODES} \
    --networkid 56 \
    --ws \
    --ws.addr '0.0.0.0' \
    --ws.port 7546 \
    --ws.origins '*' \
    --port 30301 \
    --maxpeers 80 \
    --mine \
    --miner.threads 4 \
    --unlock ${ADDRESS} \
    --password ~/smartchain-node/.password \
    --allow-insecure-unlock \
    --rpc.allow-unprotected-txs