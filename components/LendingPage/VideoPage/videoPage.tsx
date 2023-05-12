function VideoPage(): JSX.Element {
  return (
    <div className="video_page_big_div">
      <div className="holder_div">
        <div className="video_elem">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className=" inset-0 m-auto h-[16%] max-h-[96px] w-full text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path className="cursor-pointer" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
          </svg>
        </div>
        <div className="video_page_text">
          Discover why the best teams in <br /> the world use Teamtailor
        </div>
      </div>
    </div>
  )
}

export default VideoPage
