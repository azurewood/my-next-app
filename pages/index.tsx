import Link from "next/link";
import React from "react";


export default function Index() {
    return (
        <>
            <h1 className="title">
                Read <Link href="/posts/first-post">this page!</Link>
            </h1>
        </>
    );
}