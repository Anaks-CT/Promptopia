"use client"


import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Myprofile = () => {
  const handleEdit = () => {};

  const handleDelete = async () => {};

  const { data: session } = useSession();
  console.log(session)

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if(session?.user.id) {
      console.log("testing if this works")
      fetchPosts()
    }
    
  }, []);
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Myprofile;
