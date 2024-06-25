import { useState } from "react";
import "./App.css";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./Signup";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); 
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const scrollToSignup = () => {
    document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedImage) { 
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage); 

    try {
      const response = await fetch("http://localhost:8000/uploadfile/", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result); 
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    navigate("/gallery");
  };

  return (
    <div className="main">
      <nav className="navbar">
        <Camera color="black" size={64} className="camera" />
        <ol className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ol>
        <button type="submit" className="login">
          Login
        </button>
        <button type="button" className="signup" onClick={scrollToSignup}>
          Signup
        </button>
      </nav>
      <div className="app">
        <div className="half textstyle ">
        <span style={{color:"#cd853f",fontWeight:"bolder"}}> # </span>REDESIGN <span style={{color:"#cd853f",fontWeight:"bolder"}}> YOUR </span><br/> PICS
        </div>
        <div className="half">
          <form onSubmit={handleSubmit} className="image-upload-form">
            <input
              type="file"
              id="file"
              onChange={handleImageChange}
              className="file-input"
            />
            <label htmlFor="file" className="file-label">
              {!previewUrl && <img src="upload.png" alt="Upload"></img>}
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Image preview"
                  className="image-preview"
                />
              )}
            </label>
            <button type="submit" className="submit-button">
              Upload Image
            </button>
          </form>
        </div>
      </div>
      <section id="signup">
              <div className="signup123">
                <SignUpForm />
              </div>
      </section>
    </div>
  );
}

export default App;