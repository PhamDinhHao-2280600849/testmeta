
// import type { Metadata, ResolvingMetadata } from 'next'
// // import useSWR,{Fetcher} from "swr";
// export const openGraphImage = { images: ['https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75'] }
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,  
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
  
 
//   // fetch data
//   const product = await fetch(`http://localhost:8000/blogs/${params.id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
   
//   return {
//     title: product.title,
//     openGraph: {
//         ...openGraphImage
//     },
//   }
  
// }
// // const ViewDetail = ({ params }: { params: { id: string } }) => {
// //     const fetcher:Fetcher<IBlog,string> = (url: string) => fetch(url).
// //         then((res) => res.json());


// //     const { data, error, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher,
// //         {
// //             revalidateIfStale: false,
// //             revalidateOnFocus: false,
// //             revalidateOnReconnect: false
// //         });
// //     if (isLoading) {
// //         return <div>loading...</div>
// //     }

// //     return (
// //         <div>
// //             {data?.title}
// //             {data?.content}
// //             {data?.author}
// //         </div>
// //     )


 
// export default function Page({ params, searchParams }: Props) {}

// // "use client"

// // import useSWR,{Fetcher} from "swr";
// // import type { Metadata, ResolvingMetadata } from 'next'
 
// // type Props = {
// //   params: { id: string }
// //   searchParams: { [key: string]: string | string[] | undefined }
// // }
 
// // export async function generateMetadata(
// //     { params, searchParams }: Props,
// // //   parent: ResolvingMetadata
// // ): Promise<Metadata> {
// //   // read route params
  
 
// //   // fetch data
// //   const product = await fetch(`http://localhost:8000/blogs/${params.id}`).then((res) => res.json())
            
          
 
// //   // optionally access and extend (rather than replace) parent metadata
// // //   const previousImages = (await parent).openGraph?.images || []
 
// //   return {
// //     title: product.id
// //     // openGraph: {
// //     //   images: ['/some-specific-page-image.jpg', ...previousImages],
// //     // },
// //   }
// // }






// // const ViewDetail = ({ params }: { params: { id: string } }) => {
// //     const fetcher:Fetcher<IBlog,string> = (url: string) => fetch(url).
// //         then((res) => res.json());


// //     const { data, error, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher,
// //         {
// //             revalidateIfStale: false,
// //             revalidateOnFocus: false,
// //             revalidateOnReconnect: false
// //         });
// //     if (isLoading) {
// //         return <div>loading...</div>
// //     }

// //     return (
// //         <div>
// //             {data?.title}
// //             {data?.content}
// //             {data?.author}
// //         </div>
// //     )
// // }
// // export default ViewDetail;