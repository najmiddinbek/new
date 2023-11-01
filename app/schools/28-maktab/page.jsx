import RemoveBtn from "../../../components/RemoveBtn";
import Delete from "../../../components/RemoveBtn"

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

    const getRowBackgroundColor = (index) => {
        if (index % 2 === 0) {
            return "bg-white"; // Set green background for every third row
        } else if (index % 2 === 1) {
            return "gray"; // Set red background for every second row
        }
    };

    return (
        <>
            <div className="container">
                <table className="w-full shadow-xl">
                    <thead className="green text-white font-bold poppins-2">
                        <tr>
                            <th className="py-5 px-2 poppins-2">№</th>
                            <th className="py-4 px-2 poppins-2">Ism</th>
                            <th className="py-4 px-2 poppins-2">Familiya</th>
                            <th className="py-4 px-2 poppins-2">Maktab</th>
                            <th className="py-4 px-2 poppins-2">Kiritilgan vaqti</th>
                            <th className="py-4 px-2 poppins-2"></th>
                        </tr>
                    </thead>
                    {mavzula.map((t, index) => (
                        <>
                            <tbody key={t.id} className="text-center">
                                <tr className={`${getRowBackgroundColor(index)}`}>
                                    <td className={`px-2 py-4 `}>{index + 1}</td>
                                    <td className={`px-2 py-4 `}>{t.shaxs}</td>
                                    <td className={`px-2 py-4 `}>{t.maktab}</td>
                                    <td className={`px-2 py-4 `}>{t.sinf}</td>
                                    <td className={`px-2 py-4 `}>{new Date(t.createdAt).toLocaleString()}</td>
                                    <td>
                                        <Delete id={t.id} />
                                    </td>
                                </tr>
                            </tbody >
                        </>
                    ))}
                </table >
            </div >
        </>
    );
}