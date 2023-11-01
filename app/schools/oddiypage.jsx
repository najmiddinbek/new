import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/pupils", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};


export default async function TopicsList() {
    const { mavzula } = await getTopics();
    const maktablar = Array.from({ length: 54, }, (_, index) => index + 1);
    return (
        <>
            {mavzula.map((topic, index) => (
                <h1 key={index}>{topic.title}</h1>
            ))}
        </>
    );
}