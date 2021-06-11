import RacingNews365Logo from "./R365logo";

export default function PageTitle({logo = true, titleText = "Tacotron"}) {
    return (
        <div className="flex mt-5 ml-5"> {logo ? <RacingNews365Logo/> : <> </> }<h1 className="my-auto ml-1 pageTitle align-middle font-extrabold text-5xl">{titleText}</h1></div>
    )
  }