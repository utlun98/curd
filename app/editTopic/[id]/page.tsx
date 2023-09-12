import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicById = async (id: string) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
};
const EditTopic = async ({ params }: { params: any }) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
