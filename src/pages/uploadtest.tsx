const uploadtest = () => {
  const uploadHandler = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const resJson = await res.json();
  };
  return (
    <>
      <input type="file" />
    </>
  );
};
export default uploadtest;
