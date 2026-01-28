import { useState, useEffect } from 'react';

function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setImageLoaded(true);
    }, 800);
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="user-card center-card">
      <h2>User Profile</h2>
      <p className="muted">A simple user card — click to load the avatar.</p>

      <div style={{marginTop:12}}>
        <label className="upload-label">
          Choose image
          <input className="upload-input" type="file" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>

      <div style={{marginTop:12}}>
        <button className="btn" onClick={handleImageClick}>Load Image</button>
      </div>

      {isLoading && <div className="loader">Please wait…</div>}

      {imageLoaded && (
        <div className="avatar-wrap">
          <img
            src={previewUrl || 'https://i.pravatar.cc/400?img=12'}
            alt="User profile"
            className="avatar fade-in"
          />
        </div>
      )}
    </div>
  );
}

export default User;