import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlogs = () => {
  //   const imgStorageKey = "5fc4392281d108af11683eeab1889e4a";
  const handleBlogSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const img = e.target.img.value;
    const imgLink = img.split("/")[5];
    const link = `https://drive.google.com/uc?export=view&id=${imgLink}`;
    console.log(link);
    // const like = e.target.like.value;
    // const views = e.target.views.value;
    const text = e.target.text.value;

    const data = { name, link, text };

    // const formData = new FormData();
    // formData.append("image", img);
    // const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));

    const url = `https://guarded-reef-42297.herokuapp.com/blogs`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    e.target.reset();
    toast("Item added successfully!");
  };

  return (
    <div>
      <div class="hero min-h-screen bg-base-200 py-7 md:py-10">
        <div class="hero-content flex-col lg:flex-row-reverse px-3 md:px-20">
          <div class="text-center lg:text-center">
            <h1 class="text-5xl font-bold">Post new blog</h1>
            <p class="py-6">
              Knowing is the first step of accepting. Chondo has your back.
              Chondo is a period tracker intended to assist you in staying
              informed and making educated health decisions, whether it's for
              period tracking, receiving reminders on the ovulation day, or
              simply learning more about your body's individual patterns.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div class="card-body">
              <form action="" onSubmit={handleBlogSubmit}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Photo (368 x 234 pixels)</span>
                  </label>
                  <input
                    type="text"
                    name="img"
                    placeholder="Enter photo url"
                    class="input input-bordered pt-1.5"
                  />
                </div>
                {/* <div class="form-control">
                  <label class="label">
                    <span class="label-text">Like Amount</span>
                  </label>
                  <input
                    type="text"
                    name="like"
                    placeholder="Like amount"
                    class="input input-bordered"
                  />
                </div> */}
                {/* <div class="form-control">
                  <label class="label">
                    <span class="label-text">Views Amount</span>
                  </label>
                  <input
                    type="text"
                    name="views"
                    placeholder="Views amount"
                    class="input input-bordered"
                  />
                </div> */}
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Blog Content</span>
                  </label>
                  <textarea
                    class="textarea textarea-bordered h-24"
                    name="text"
                    placeholder="Text here"
                  ></textarea>
                </div>
                <div class="form-control mt-6">
                  <button type="submit" class="btn btn-primary">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddBlogs;
