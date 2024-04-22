"use client"
import TableManage from "../../components/Table";
import useSWR from "swr";
const ViewDetail = ({ params }: { params: { id: string } }) => {
    const fetcher = (url: string) => fetch(url).
        then((res) => res.json());


    const { data, error, isLoading } = useSWR("http://localhost:8000/blogs", fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        });
    if (isLoading) {
        return <div>loading...</div>
    }
    return (
        <div>
            <TableManage blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
        </div>
    )
}
export default ViewDetail;