import React, { useState, useEffect } from 'react'
import { storage } from "./firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import "./App.css"



const App = () => {
  const [imageFile, setFile] = useState(null)
  const [imageList, setImages] = useState([])
  const imageListRef = ref(storage, "images/")

  const fetchImages = async () => {
    const imageAwaiter = await listAll(imageListRef)
    const donwloadUrls = await Promise.all(imageAwaiter.items.map(getDownloadURL))
    setImages(donwloadUrls)

      //   .then((res) => {
      //     res.items.forEach((item) => {
      //       getDownloadURL(item)
      //       .then((url) => {
      //         setImages((prev) => [...prev, url])
      //     })
      //   })
      // })
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const upload = (event) => {
    event.preventDefault()
    if (imageFile === null) {
      return window.alert("No file selected")
    }
    const imageRef = ref(storage, `images/${imageFile.name}`)
    uploadBytes(imageRef, imageFile)
    .then(() => {
      window.alert("image uploaded")
      fetchImages()
    })
  }
  return (
    <>
      <div>
        <h1>Uploader</h1>
        <input type="file" onChange={(event) => {
          setFile(event.target.files[0])
          }
        }></input>
        <button id="uploadButton" onClick={upload}>Upload</button>
      </div>
      <div>
        {imageList.map((url, index) => {
          return <div className="returnedImageDiv" key={index}><img  id="returnedImages" src={url}></img></div>
        })}
      </div>
    </>
  )
}

export default App

