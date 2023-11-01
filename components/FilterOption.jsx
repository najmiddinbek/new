import React from 'react'

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


export default async function FilterOption() {
    const { mavzula } = await getTopics();

    return (
        <div>
            <select>
                <option>Tanlang</option>
                {mavzula.map((mavzu, index) => (
                    <>
                        <option key={index} value={mavzu}>{mavzu.shaxs}</option>
                    </>
                ))}
            </select>
        </div>
    )
}
