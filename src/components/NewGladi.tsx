import * as React from "react";
import { useState } from "react";
import axios from "axios";
import "../style/newGladi.css";
import { storage } from "../setup/setupFirebase";

interface Props {}

const NewGladi: React.FC<Props> = () => {
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [message, setMessage] = useState<string>("Select a file to upload");
  const [image, setImage] = useState<any | null>(null);
  const [pictures, setPictures] = useState<any>([]);
  const acceptedFiles = "image/png, image/jpg, image/jpeg";

  const handleSubmit = () =>
    axios
      .post(`http://localhost:8080/create_new_gladi`, {
        name,
        color,
        height,
        pictures
      })
      .then(res => {
        setMessage(res.data);
        setName("");
        setColor("");
        setHeight(0);
        setPictures([]);
        setImage(null);
      })
      .catch(error => console.log(error));

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image?.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(imageURL => {
            // console.log(url);
            setPictures([...pictures, imageURL]);
            setMessage("Upload success! Choose new file to upload");
          });
      }
    );
  };

  return (
    <div className="main">
      <div className="inputs">
        <input
          className="inputField"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          className="inputField"
          type="text"
          name="color"
          placeholder="Color"
          value={color}
          onChange={e => setColor(e.target.value)}
          required
        />
        <input
          className="inputField"
          type="number"
          name="height"
          value={height}
          placeholder="Height"
          onChange={e => setHeight(parseInt(e.target.value))}
          required
        />
      </div>
      <div className="imageComp">
        <label className="imageField" htmlFor="image">
          <i className="fa fa-cloud-upload"></i> Select File
        </label>
        <input
          id="image"
          className="imageField"
          type="file"
          name="image"
          onChange={e => {
            setImage(e.target.files![0]);
            setMessage(e.target.files![0].name);
          }}
          accept={acceptedFiles}
        />
        <div className="message">
          <p>{message}</p>
        </div>
        <button className="submit" type="submit" onClick={handleUpload}>
          Upload Image
        </button>
      </div>

      <button className="submit" type="submit" onClick={handleSubmit}>
        Upload new variety
      </button>
    </div>
  );
};

export default NewGladi;
