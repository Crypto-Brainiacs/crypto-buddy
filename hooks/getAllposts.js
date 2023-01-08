import axios from "axios";
import Post from "../models/post";
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { contractAddress } from "../constants/Constants";
import { useState, useEffect } from 'react';
export default function getAllposts() {
    const [posts, setPosts] = useState();
    const abi = ["function writepost(string memory prefName, string memory prefDesc) public"];
    useEffect(() => {
    get();
    }, [])
    async function get() {}
    async function writepost(name, description) {}
    return {posts : posts, writepost : (name, description) => writepost(name, description)};
}


async function get() {
    const data = await axios.get('/api/getAllposts');
    const result = data.data.map((item) => new Post(item)).reverse();
    setPosts(result);
}

async function writepost(name, description) {
const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: {
            walletconnect: {
                package: WalletConnectProvider,
            }
          },
    });
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const smartContract = new ethers.Contract(contractAddress, abi, provider);
    const contractWithSigner = smartContract.connect(signer);
    const tx = await contractWithSigner.post(name, description);
    await tx.wait();
    get();
}
