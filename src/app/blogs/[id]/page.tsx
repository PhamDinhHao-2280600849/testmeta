
"use client";
import useSWR,{Fetcher} from "swr";
const ViewDetail = ({ params }: { params: { id: string } }) => {
    const fetcher:Fetcher<IBlog,string> = (url: string) => fetch(url).
        then((res) => res.json());


    const { data, error, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher,
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
            {data?.title}
            {data?.content}
            {data?.author}
        </div>
    )
}
export default ViewDetail;