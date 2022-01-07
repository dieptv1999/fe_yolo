import Head from 'next/head'
import {BASE_URL} from "../const"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Multi-Camera Object Detection, Tracking, and Counting</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="text-2xl font-semibold my-6">Multi-Camera Object Detection, Tracking, and Counting</div>

      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col">
          <div className="flex w-full mb-2">
            <img src={`${BASE_URL}/video_feed/camera/0`} className="center img-container mr-2"/>
            <img src={`${BASE_URL}/video_feed/yolo/0`} className="center img-container ml-2"/>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex w-full">
            <img src={`${BASE_URL}/video_feed/camera/1`} className="center img-container mr-2"/>
            <img src={`${BASE_URL}/video_feed/yolo/1`} className="center img-container ml-2"/>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex">
            <img src={`${BASE_URL}/video_feed/camera/2`} className="center img-container mr-2"/>
            <img src={`${BASE_URL}/video_feed/yolo/2`} className="center img-container ml-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}
