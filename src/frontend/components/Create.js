import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import file_upload from './file_upload.png';
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const Create = ({ marketplace, nft }) => {
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    
    const uploadToIPFS = async (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        if (typeof file !== 'undefined') {
            try {
                const result = await client.add(file)
                console.log(result)
                setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
            } catch (error) {
                console.log("ipfs image upload error: ", error)
            }
        }
    }
    const createNFT = async () => {
        if (!image || !price || !name || !description) return
        try {
            const result = await client.add(JSON.stringify({ image, name, description }))
            mintThenList(result)
        } catch (error) {
            console.log("ipfs uri upload error: ", error)
        }
    }
    const mintThenList = async (result) => {
        const uri = `https://ipfs.infura.io/ipfs/${result.path}`
        //mint nft
        await (await nft.mint(uri)).wait()
        //get tokenId of new nft
        const id = await nft.tokenCount()
        //approve marketplave to spend nft
        await (await nft.setApprovalForAll(marketplace.address, true)).wait()
        //add nft to marketplave
        const listeningPrice = ethers.utils.parseEther(price.toString())
        await (await marketplace.makeItem(nft.address, id, listeningPrice)).wait()
    }

    return (
        <div className="container-fluid mt-5">
            <h1><b>Create New Item</b></h1>
            <br />
            <div className="row">
                <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="content mx-auto">
                        <div>
                            <small>
                                <span style={{ color: 'red' }}>* </span>
                                <span style={{ color: 'grey' }}>Required fields</span>
                            </small>
                        </div>
                        <br />
                        <Row className="g-4">
                            <div>
                                <p>
                                    <strong>
                                        <span>Image, Video, Audio, or 3D Model</span>
                                        <span style={{ color: 'red' }}> *</span>
                                    </strong>
                                    <small>
                                        <div style={{ color: 'grey' }}>File types supported: JPG, PNG, GIT, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</div>
                                    </small>
                                </p>
                                <label for={"file-form"}>
                                    <img src={file_upload} width="80px" height="80"px alt="drag" class="img-rounded" />
                                </label>
                                <Form.Control
                                type="file"
                                name="file"
                                id="file-form"
                                style={{ display:"none" }}
                                onChange={uploadToIPFS}
                                />
                            </div>
                            <br />
                            <div>
                                <p>
                                    <strong>
                                        <span>Name</span>
                                        <span style={{ color: 'red' }}> *</span>
                                    </strong>
                                </p>
                                <Form.Control
                                onChange={(e) => setName(e.target.value)}
                                size="lg"
                                type="text"
                                placeholder="Item Name"
                                />
                            </div>
                            <br />
                            <div>
                                <p>
                                    <strong>
                                        <span>Description</span> 
                                    </strong>
                                    <small style={{ color: 'grey' }}>
                                        <p>The description will be included on the item's detail page underneath its image. </p>
                                    </small>
                                </p>
                                <Form.Control
                                onChange={(e) => setDescription(e.target.value)}
                                size="lg"
                                type="textarea"
                                placeholder="Description"
                                />
                            </div>
                            <br />
                            <div>
                                <p>
                                    <strong>
                                        <span>Price in ETH</span>
                                    </strong>
                                </p>
                                <Form.Control
                                onChange={(e) => setPrice(e.target.value)}
                                size="lg"
                                type="number"
                                placeholder="Price in ETH"
                                />
                            </div>
                            <br />
                            <div className="d-grid px-0">
                                <Button onClick={createNFT} variant="primary" size="lg" >
                                    Create & ListNFT!
                                </Button>
                            </div>
                        </Row>
                    </div>
                </main>
            </div>
        </div>
    );
}
export default Create