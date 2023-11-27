import axios from "axios";

export const uploadImg = async (img) => {
  const formData = new FormData();
  formData.append("image", img);
  console.log(formData);
  const res = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(res);
  return res.data;
};
